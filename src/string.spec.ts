import { describe, it, expect } from 'vitest';
import { String } from './string';

describe('String', () => {
  describe('empty', () => {
    it('Should return empty string ""', () => {
      expect(String.empty).toBe('');
    });
  });

  describe('isNullOrEmpty', () => {
    it('Should be true when string is empty', () => {
      expect(String.isNullOrEmpty('')).toBeTruthy();
    });

    it('Should be true when string is null', () => {
      expect(String.isNullOrEmpty(null)).toBeTruthy();
    });

    it('Should be true when string is undefined', () => {
      expect(String.isNullOrEmpty(undefined)).toBeTruthy();
    });

    it('Should be false when there is a string as input', () => {
      expect(String.isNullOrEmpty('value')).toBeFalsy();
    });

    it('Should be false when input value is blank', () => {
      expect(String.isNullOrEmpty(' ')).toBeFalsy();
    });
  });

  describe('isNotNullOrEmpty', () => {
    it('Should be false when string is empty', () => {
      expect(String.isNotNullOrEmpty('')).toBeFalsy();
    });

    it('Should be false when string is null', () => {
      expect(String.isNotNullOrEmpty(null)).toBeFalsy();
    });

    it('Should be false when string is undefined', () => {
      expect(String.isNotNullOrEmpty(undefined)).toBeFalsy();
    });

    it('Should be true when there is a string as input', () => {
      expect(String.isNotNullOrEmpty('value')).toBeTruthy();
    });

    it('Should be true when input value is blank', () => {
      expect(String.isNotNullOrEmpty(' ')).toBeTruthy();
    });
  });

  describe('isNullOrBlank', () => {
    it('Should be true when string is empty', () => {
      expect(String.isNullOrBlank('')).toBeTruthy();
    });

    it('Should be true when string is null', () => {
      expect(String.isNullOrBlank(null)).toBeTruthy();
    });

    it('Should be true when string is undefined', () => {
      expect(String.isNullOrBlank(undefined)).toBeTruthy();
    });

    it('Should be true when string is blank', () => {
      expect(String.isNullOrBlank('     ')).toBeTruthy();
    });

    it('Should be false when there is a string as input', () => {
      expect(String.isNullOrBlank('value')).toBeFalsy();
    });
  });

  describe('isNotNullOrBlank', () => {
    it('Should be false when string is empty', () => {
      expect(String.isNotNullOrBlank('')).toBeFalsy();
    });

    it('Should be false when string is null', () => {
      expect(String.isNotNullOrBlank(null)).toBeFalsy();
    });

    it('Should be false when string is undefined', () => {
      expect(String.isNotNullOrBlank(undefined)).toBeFalsy();
    });

    it('Should be false when string is blank', () => {
      expect(String.isNotNullOrBlank('     ')).toBeFalsy();
    });

    it('Should be true when there is a string as input', () => {
      expect(String.isNotNullOrBlank('value')).toBeTruthy();
    });
  });

  describe('removeAccents', () => {
    it.each([
      ['tété', 'tete'],
      ['à côté', 'a cote'],
      ["À l'époque", "A l'epoque"],
      ['À É Î Ô Û à é î ô û', 'A E I O U a e i o u'],
    ])('Should convert "%s" to "%s"', (input: string, expectedResult: string) => {
      expect(String.removeAccents(input)).toBe(expectedResult);
    });

    it('Should return same value when has not accents', () => {
      expect(String.removeAccents('string without accent')).toBe('string without accent');
    });

    it('Should return empty string when input is empty', () => {
      expect(String.removeAccents('')).toBe('');
    });
  });

  describe('join', () => {
    it('Should have no separator when it has only one value', () => {
      expect(String.join(';', 'Bass')).toBe('Bass');
    });

    it('Should throw an error when it has a null value', () => {
      expect(() => String.join(';', 'Bass', null)).toThrowError(/Any of the arguments is null or undefined./);
    });

    it('Should throw an error when it has a undefined value', () => {
      expect(() => String.join(';', 'Bass', undefined)).toThrowError(/Any of the arguments is null or undefined./);
    });

    it('Should return an empty string when it has no value', () => {
      const emptyParams: string[] = [];
      expect(String.join(';', ...emptyParams)).toBe('');
    });

    it('Should return value with concatenated values with separator between them', () => {
      expect(String.join(';', 'Bass', 'Guitar')).toBe('Bass;Guitar');
    });
  });

  describe('countWords', () => {
    it('Should return 0 when input is null', () => {
      expect(String.countWords(null)).toBe(0);
    });

    it('Should return 0 when input is undefined', () => {
      expect(String.countWords(undefined)).toBe(0);
    });

    it('Should return 0 when input is blank', () => {
      expect(String.countWords(' ')).toBe(0);
    });

    it('Should return 0 when input is empty', () => {
      expect(String.countWords('')).toBe(0);
    });

    it('Should have 1 word of 1 letter', () => {
      expect(String.countWords('a')).toBe(1);
    });

    it('Should have 1 word', () => {
      expect(String.countWords('hello')).toBe(1);
    });

    it('Should have 2 words separate by blank', () => {
      expect(String.countWords('Hello world')).toBe(2);
    });

    it('Should have 4 words with special characters', () => {
      expect(String.countWords('hello - all the world ! WAIT!')).toBe(5);
    });
  });

  // TODO : FEATURE LIST:

  // 1: isDigit => check only digit

  // 2: isAlpha => check only alpha

  // 3: Checks whether data contains only alpha and digit characters. (Alphanumeric)
  // isAlphaDigit('year2020'); => true
  // isAlphaDigit('1448'); => true
  // isAlphaDigit('40-20'); => false

  // 4: retourne les mots d'une phrase dans un tableau
  // words('welcome to Earth'); // => ['welcome', 'to', 'Earth']
});
