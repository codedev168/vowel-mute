import { describe, it, expect, vi } from 'vitest';
import { muteVowels, muteCustomVowels } from '../index.js';

describe('muteVowels', () => {
  it('replaces all standard vowels with the mask character', () => {
    expect(muteVowels('Hello World', '*')).toBe('H*ll* W*rld');
  });

  it('handles uppercase and lowercase vowels correctly', () => {
    expect(muteVowels('AEIOUaeiou', '#')).toBe('##########');
  });

  it('does not replace non-vowel characters', () => {
    expect(muteVowels('bcdfg', 'x')).toBe('bcdfg');
  });

  it('returns empty string for empty input', () => {
    expect(muteVowels('', '*')).toBe('');
  });

  it('throws error when mask is empty', () => {
    expect(() => muteVowels('Hello', '')).toThrowError('Mask must be a non-empty string');
  });

  it('throws error when input is not a string', () => {
    expect(() => muteVowels(123 as any, '*')).toThrowError('Input must be a string');
  });

  it('throws error when mask is not a string', () => {
    expect(() => muteVowels('Hello', 123 as any)).toThrowError('Mask must be a non-empty string');
  });

  it('uses the first character of the mask string', () => {
    expect(muteVowels('aei', 'XX')).toBe('XXX');
  });
});

describe('muteCustomVowels', () => {
  it('replaces specified custom vowels with the mask character', () => {
    expect(muteCustomVowels('apple', '*', ['a', 'e'])).toBe('*ppl*');
  });

  it('handles case-insensitive vowel matching', () => {
    expect(muteCustomVowels('AeI', '#', ['a', 'e', 'i'])).toBe('###');
  });

  it('does not replace characters not in the vowels array', () => {
    expect(muteCustomVowels('bcdfg', 'x', ['a', 'e'])).toBe('bcdfg');
  });

  it('returns empty string for empty input', () => {
    expect(muteCustomVowels('', '*', ['a', 'e'])).toBe('');
  });

  it('throws error when vowels is not an array', () => {
    expect(() => muteCustomVowels('Hello', '*', 'not an array' as any)).toThrowError('Vowels must be an array');
  });

  it('throws error when a vowel is not a single character', () => {
    expect(() => muteCustomVowels('Hello', '*', ['aa'])).toThrowError('Each vowel must be a single character string');
  });

  it('throws error when mask is empty', () => {
    expect(() => muteCustomVowels('Hello', '', ['a'])).toThrowError('Mask must be a non-empty string');
  });

  it('throws error when input is not a string', () => {
    expect(() => muteCustomVowels(123 as any, '*', ['a'])).toThrowError('Input must be a string');
  });

  it('uses the first character of the mask string', () => {
    expect(muteCustomVowels('aei', 'XX', ['a', 'e', 'i'])).toBe('XXX');
  });

  it('does not replace any characters when vowels array is empty', () => {
    expect(muteCustomVowels('aeiou', '*', [])).toBe('aeiou');
  });
});