import { describe, it, expect } from 'vitest';
import { String } from './string';

describe('String', () => {
  describe('EMPTY', () => {
    it('Should return empty string ""', () => {
      expect(String.EMPTY).toBe('');
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

    it('Should be false when have "input"', () => {
      expect(String.isNullOrEmpty('input')).toBeFalsy();
    });
  });
});
