import { describe, it, expect } from 'vitest';
import { String } from './string';

describe('String', () => {
  describe('empty', () => {
    it('Should return empty string ""', () => {
      expect(String.empty).toBe('');
    });
  });

  describe('isNullOrEmpty', () => {
    it('Should be true when have empty string', () => {
      expect(String.isNullOrEmpty('')).toBeTruthy();
    });

    it('Should be true when have null', () => {
      expect(String.isNullOrEmpty(null)).toBeTruthy();
    });

    it('Should be true when have undefined', () => {
      expect(String.isNullOrEmpty(undefined)).toBeTruthy();
    });

    it('Should be false when have "value"', () => {
      expect(String.isNullOrEmpty('value')).toBeFalsy();
    });

    it('Should be false when have blank value', () => {
      expect(String.isNullOrEmpty(' ')).toBeFalsy();
    });
  });

  describe('isNotNullOrEmpty', () => {
    it('Should be false when have empty string', () => {
      expect(String.isNotNullOrEmpty('')).toBeFalsy();
    });

    it('Should be false when have null', () => {
      expect(String.isNotNullOrEmpty(null)).toBeFalsy();
    });

    it('Should be false when have undefined', () => {
      expect(String.isNotNullOrEmpty(undefined)).toBeFalsy();
    });

    it('Should be true when have "value"', () => {
      expect(String.isNotNullOrEmpty('value')).toBeTruthy();
    });

    it('Should be true when have blank value', () => {
      expect(String.isNotNullOrEmpty(' ')).toBeTruthy();
    });
  });

  describe('isNullOrBlank', () => {
    it('Should be true when have empty string', () => {
      expect(String.isNullOrBlank('')).toBeTruthy();
    });

    it('Should be true when have null', () => {
      expect(String.isNullOrBlank(null)).toBeTruthy();
    });

    it('Should be true when have undefined', () => {
      expect(String.isNullOrBlank(undefined)).toBeTruthy();
    });

    it('Should be true when have empty blank string', () => {
      expect(String.isNullOrBlank('     ')).toBeTruthy();
    });

    it('Should be false when have "value"', () => {
      expect(String.isNullOrBlank('value')).toBeFalsy();
    });
  });

  describe('isNotNullOrBlank', () => {
    it('Should be false when have empty string', () => {
      expect(String.isNotNullOrBlank('')).toBeFalsy();
    });

    it('Should be false when have null', () => {
      expect(String.isNotNullOrBlank(null)).toBeFalsy();
    });

    it('Should be false when have undefined', () => {
      expect(String.isNotNullOrBlank(undefined)).toBeFalsy();
    });

    it('Should be false when have empty blank string', () => {
      expect(String.isNotNullOrBlank('     ')).toBeFalsy();
    });

    it('Should be true when have "value"', () => {
      expect(String.isNotNullOrBlank('value')).toBeTruthy();
    });
  });

  describe('removeAccents', () => {
    it.each([
      ['tété', 'tete'],
      ['à côté', 'a cote'],
      ["À l'époque", "A l'epoque"],
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
    it('Should not have a separator when it only has one value', () => {
      expect(String.join(';', 'Bass')).toBe('Bass');
    });

    it('Should throw error when have null value', () => {
      expect(() => String.join(';', 'Bass', null)).toThrowError();
    });

    it('Should throw error when have undefined value', () => {
      expect(() => String.join(';', 'Bass', undefined)).toThrowError(/Any of the arguments is null or undefined./);
    });

    it('Should return empty string when has no value', () => {
      const emptyParams: string[] = [];
      expect(String.join(';', ...emptyParams)).toBe('');
    });

    it('Should return values with separator between them', () => {
      expect(String.join(';', 'Bass', 'Guitar')).toBe('Bass;Guitar');
    });
  });
});
