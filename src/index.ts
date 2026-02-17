export function muteVowels(input: string, mask: string = '*'): string {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  if (typeof mask !== 'string' || mask.length === 0) {
    throw new Error('Mask must be a non-empty string');
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const maskChar = mask[0];
  return input
    .split('')
    .map(char => {
      const normalizedChar = char.toLowerCase();
      return vowels.includes(normalizedChar) ? maskChar : char;
    })
    .join('');
}

export function muteCustomVowels(input: string, mask: string, vowels: string[]): string {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  if (typeof mask !== 'string' || mask.length === 0) {
    throw new Error('Mask must be a non-empty string');
  }
  if (!Array.isArray(vowels)) {
    throw new Error('Vowels must be an array');
  }
  for (const v of vowels) {
    if (typeof v !== 'string' || v.length !== 1) {
      throw new Error('Each vowel must be a single character string');
    }
  }
  const normalizedVowels = new Set(vowels.map(v => v.toLowerCase()));
  const maskChar = mask[0];
  return input
    .split('')
    .map(char => {
      const normalizedChar = char.toLowerCase();
      return normalizedVowels.has(normalizedChar) ? maskChar : char;
    })
    .join('');
}

export default {
  muteVowels,
  muteCustomVowels
};