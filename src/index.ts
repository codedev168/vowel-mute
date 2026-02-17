/**
 * Replaces all standard vowels (a, e, i, o, u, case-insensitive) in the input string with the specified mask character.
 * @param input The string to process.
 * @param mask The character to replace vowels with.
 * @returns The processed string with vowels replaced.
 * @throws {Error} If mask is not a non-empty string.
 */
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
    .map(char => (vowels.includes(char.toLowerCase()) ? maskChar : char))
    .join('');
}

/**
 * Replaces all specified vowels in the input string with the specified mask character.
 * @param input The string to process.
 * @param mask The character to replace vowels with.
 * @param vowels The array of vowels to replace (each must be a single character string).
 * @returns The processed string with specified vowels replaced.
 * @throws {Error} If mask is not a non-empty string, or vowels is not a valid array of single-character strings.
 */
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
    .map(char => (normalizedVowels.has(char.toLowerCase()) ? maskChar : char))
    .join('');
}