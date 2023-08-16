import { describe, it, expect } from 'vitest';
import { String, StringOrNullOrUndefined } from './string';

describe('String', () => {
  describe('EMPTY', () => {
    it('Should return empty string ""', () => {
      expect(String.EMPTY).toBe('');
    });
  });

  describe('isEmpty', () => {
    it('Should be false when there is a string as input', () => {
      expect(String.isEmpty('value')).toBeFalsy();
    });

    it('Should be false when there is a blank string as input', () => {
      expect(String.isEmpty(' ')).toBeFalsy();
    });

    it('Should be true when input value is empty', () => {
      expect(String.isEmpty('')).toBeTruthy();
    });
  });

  describe('isNotEmpty', () => {
    it('Should be true when there is a string as input', () => {
      expect(String.isNotEmpty('value')).toBeTruthy();
    });

    it.skip('Should be false when input value is empty', () => {
      expect(String.isNotEmpty('')).toBeFalsy();
    });
  });

  describe('isNullOrEmpty', () => {
    describe('Should be true when string is:', () => {
      it.each([null, undefined, ''])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNullOrEmpty(input)).toBeTruthy();
      });
    });

    it('Should be false when there is a string as input', () => {
      expect(String.isNullOrEmpty('value')).toBeFalsy();
    });

    it('Should be false when input value is blank', () => {
      expect(String.isNullOrEmpty(' ')).toBeFalsy();
    });
  });

  describe('isNotNullOrEmpty', () => {
    describe('Should be false when string is:', () => {
      it.each([null, undefined, ''])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotNullOrEmpty(input)).toBeFalsy();
      });
    });

    it('Should be true when there is a string as input', () => {
      expect(String.isNotNullOrEmpty('value')).toBeTruthy();
    });

    it('Should be true when input value is blank', () => {
      expect(String.isNotNullOrEmpty(' ')).toBeTruthy();
    });
  });

  describe('isBlank', () => {
    it('Should be false when there is a string as input', () => {
      expect(String.isBlank('value')).toBeFalsy();
    });

    it('Should be true when there is a blank string as input', () => {
      expect(String.isBlank(' ')).toBeTruthy();
    });

    it('Should be true when input value is empty', () => {
      expect(String.isBlank('')).toBeTruthy();
    });
  });

  describe('isNotBlank', () => {
    it('Should be true when there is a string as input', () => {
      expect(String.isNotBlank('value')).toBeTruthy();
    });

    it('Should be false when there is a blank string as input', () => {
      expect(String.isNotBlank(' ')).toBeFalsy();
    });

    it('Should be false when input value is empty', () => {
      expect(String.isNotBlank('')).toBeFalsy();
    });
  });

  describe('isNullOrBlank', () => {
    describe('Should be true when string is:', () => {
      it.each([null, undefined, '', '     '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNullOrBlank(input)).toBeTruthy();
      });
    });

    it('Should be false when there is a string as input', () => {
      expect(String.isNullOrBlank('value')).toBeFalsy();
    });
  });

  describe('isNotNullOrBlank', () => {
    describe('Should be false when string is:', () => {
      it.each([null, undefined, '', '     '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotNullOrBlank(input)).toBeFalsy();
      });
    });

    it('Should be true when there is a string as input', () => {
      expect(String.isNotNullOrBlank('value')).toBeTruthy();
    });
  });

  describe('removeAccents', () => {
    it.each([
      ['tété!', 'tete!'],
      ['à côté', 'a cote'],
      ["À l'époque", "A l'epoque"],
      ['À É Î Ô Û à é î ô û', 'A E I O U a e i o u'],
    ])('Should convert "%s" to "%s"', (input: string, expectedResult: string) => {
      expect(String.removeAccents(input)).toBe(expectedResult);
    });

    it('Should return same value when has not accents', () => {
      expect(String.removeAccents('String, wItHouT accent.!')).toBe('String, wItHouT accent.!');
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
    describe('Should return 0 when input is:', () => {
      it.each([null, undefined, ' ', ''])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.countWords(input)).toBe(0);
      });
    });

    it('Should have 1 word of 1 letter', () => {
      expect(String.countWords('a')).toBe(1);
    });

    it('Should have 1 word', () => {
      expect(String.countWords('hello')).toBe(1);
    });

    it('Should have 1 word with spaces at the end', () => {
      expect(String.countWords('hello   ')).toBe(1);
    });

    it('Should have 2 words separate by blank', () => {
      expect(String.countWords('Hello world')).toBe(2);
    });

    it('Should have 2 words with 1 number', () => {
      expect(String.countWords('Hello m4d 10 world!')).toBe(4);
    });

    it('Should have 4 words with special characters', () => {
      expect(String.countWords('hello --   all the world !  !+! WAIT!')).toBe(5);
    });
  });

  describe('isNumber', () => {
    describe('Should be false when input is not a number', () => {
      it.each(['value', 'Hello world!', '!', '10234!'])('When input is: "%s"', (input: string) => {
        expect(String.isNumber(input)).toBeFalsy();
      });
    });

    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', '  '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNumber(input)).toBeFalsy();
      });
    });

    describe('Should be true when input is a number', () => {
      it.each(['1', '10', '0', '-10', '999999', '12345678901234567890', '-12345678901234567890'])(
        'When input is: "%s"',
        (input: string) => {
          expect(String.isNumber(input)).toBeTruthy();
        },
      );
    });
  });

  describe('isNotNumber', () => {
    describe('Should be true when input is not a number', () => {
      it.each(['value', 'Hello world!', '!', '10234!'])('When input is: "%s"', (input: string) => {
        expect(String.isNotNumber(input)).toBeTruthy();
      });
    });

    describe('Should be true when input is:', () => {
      it.each([null, undefined, '', '  '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotNumber(input)).toBeTruthy();
      });
    });

    describe('Should be false when input is a number', () => {
      it.each(['1', '10', '0', '-10', '999999', '100000066859', '-1234325983456983'])(
        'When input is: "%s"',
        (input: string) => {
          expect(String.isNotNumber(input)).toBeFalsy();
        },
      );
    });
  });

  describe('isAlpha', () => {
    describe('Should be false when input is a number', () => {
      it.each(['12', '0', '-1'])('When input is: "%s"', (input: string) => {
        expect(String.isAlpha(input)).toBeFalsy();
      });
    });

    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isAlpha(input)).toBeFalsy();
      });
    });

    describe('Should be true when input is only with alpha characters:', () => {
      it.each(['A', 'Hello world'])('"%s"', (input: string) => {
        expect(String.isAlpha(input)).toBeTruthy();
      });
    });

    describe('Should be false when input contains at least one special character:', () => {
      it.each(['Hello!', 'Hello#', '+abc', '`34'])('"%s"', (input: string) => {
        expect(String.isAlpha(input)).toBeFalsy();
      });
    });

    describe('Should be false when input contains at least one number:', () => {
      it.each(['Hello 1', 'h3llo'])('"%s"', (input: string) => {
        expect(String.isAlpha(input)).toBeFalsy();
      });
    });
  });

  describe('isNotAlpha', () => {
    describe('Should be true when input is a number', () => {
      it.each(['12', '0', '-1'])('When input is: "%s"', (input: string) => {
        expect(String.isNotAlpha(input)).toBeTruthy();
      });
    });

    describe('Should be true when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotAlpha(input)).toBeTruthy();
      });
    });

    describe('Should be false when input is only with alpha characters:', () => {
      it.each(['A', 'Hello world'])('"%s"', (input: string) => {
        expect(String.isNotAlpha(input)).toBeFalsy();
      });
    });

    describe('Should be true when input contains at least one special character:', () => {
      it.each(['Hello!', 'Hello#', '+abc', '`34'])('"%s"', (input: string) => {
        expect(String.isNotAlpha(input)).toBeTruthy();
      });
    });
  });

  describe('containsSpecialCharacter', () => {
    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', '  '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsSpecialCharacter(input)).toBeFalsy();
      });
    });

    describe('Should be true when input contains at least one special character:', () => {
      it.each([
        '.dot',
        '/slash',
        '!exclamation',
        '"doublequote',
        '#hash',
        '$dollar',
        '%percent',
        '&ampersand',
        "'singlequote",
        '(openparen',
        ')closeparen',
        '*asterisk',
        '+plus',
        ',comma',
        '-hyphen',
        '.dot',
        '/slash',
        ':colon',
        ';semicolon',
        '<less',
        '>greater',
        '=equals',
        '?question',
        '@at',
        '[openbracket',
        ']closebracket',
        '\\backslash',
        '^caret',
        '_underscore',
        '`backtick',
        '{openbrace',
        '}closebrace',
        '|pipe',
        '~tilde',
      ])('"%s"', (input: string) => {
        expect(String.containsSpecialCharacter(input)).toBeTruthy();
      });
    });

    describe('Should be false when not contains special character:', () => {
      it.each(['1234', 'ABC', '123ABCdef'])('"%s"', (input: string) => {
        expect(String.containsSpecialCharacter(input)).toBeFalsy();
      });
    });
  });

  describe('notContainsSpecialCharacter', () => {
    describe('Should be true when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsSpecialCharacter(input)).toBeTruthy();
      });
    });

    describe('Should be false when input contains at least one special character:', () => {
      it.each(['|pipe', '~tilde'])('"%s"', (input: string) => {
        expect(String.notContainsSpecialCharacter(input)).toBeFalsy();
      });
    });

    describe('Should be true when not contains special character:', () => {
      it.each(['1234', 'ABC', '123ABCdef'])('"%s"', (input: string) => {
        expect(String.notContainsSpecialCharacter(input)).toBeTruthy();
      });
    });
  });

  describe('containsNumber', () => {
    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsNumber(input)).toBeFalsy();
      });
    });

    describe('Should be true when input contains number:', () => {
      it.each(['12', 'abc0!', '!@#$%1()'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsNumber(input)).toBeTruthy();
      });
    });

    describe('Should be false when input not contains number:', () => {
      it.each(['abc', '!@#$_)(', '!@#$%ABC*()_+'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsNumber(input)).toBeFalsy();
      });
    });
  });

  describe('notContainsNumber', () => {
    describe('Should be true when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsNumber(input)).toBeTruthy();
      });
    });

    describe('Should be false when input contains number:', () => {
      it.each(['12', 'abc0!', '!@#$%1()'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsNumber(input)).toBeFalsy();
      });
    });

    describe('Should be true when input not contains number:', () => {
      it.each(['abc', '!@#$_)(', '!@#$%ABC*()_+'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsNumber(input)).toBeTruthy();
      });
    });
  });

  describe('containsAlpha', () => {
    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsAlpha(input)).toBeFalsy();
      });
    });

    describe('Should be true when input contains alphabetic character:', () => {
      it.each(['abc', 'ABC0!', '!@#$%A()'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsAlpha(input)).toBeTruthy();
      });
    });

    describe('Should be false when input not contains alphabetic character:', () => {
      it.each(['123', '!@#$_)(', '!@#$%123*()_+'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsAlpha(input)).toBeFalsy();
      });
    });
  });

  describe('notContainsAlpha', () => {
    describe('Should be true when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsAlpha(input)).toBeTruthy();
      });
    });

    describe('Should be false when input contains alphabetic character:', () => {
      it.each(['abc', 'ABC0!', '!@#$%A()'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsAlpha(input)).toBeFalsy();
      });
    });

    describe('Should be true when input not contains alphabetic character:', () => {
      it.each(['123', '!@#$_)(', '!@#$%123*()_+'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.notContainsAlpha(input)).toBeTruthy();
      });
    });
  });

  describe('isAlphaNumber', () => {
    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isAlphaNumber(input)).toBeFalsy();
      });
    });

    describe('Should be true when input contains alphabetic characters and numbers:', () => {
      it.each(['year2023', '0A'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isAlphaNumber(input)).toBeTruthy();
      });
    });

    describe('Should be false when input contains only alphabetic characters:', () => {
      it.each(['Hello', 'hello world'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isAlphaNumber(input)).toBeFalsy();
      });
    });

    describe('Should be false when input contains only numbers:', () => {
      it.each(['12', '0', '-99'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isAlphaNumber(input)).toBeFalsy();
      });
    });

    describe('Should be false when input contains special character:', () => {
      it.each(['40-abc', 'ABC!123'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isAlphaNumber(input)).toBeFalsy();
      });
    });
  });

  describe('isNotAlphaNumber', () => {
    describe('Should be true when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotAlphaNumber(input)).toBeTruthy();
      });
    });

    describe('Should be false when input contains alphabetic characters and numbers:', () => {
      it.each(['year2023', '0A'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotAlphaNumber(input)).toBeFalsy();
      });
    });

    describe('Should be true when input contains only alphabetic characters:', () => {
      it.each(['Hello', 'hello world'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotAlphaNumber(input)).toBeTruthy();
      });
    });

    describe('Should be true when input contains only numbers:', () => {
      it.each(['12', '0', '-99'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotAlphaNumber(input)).toBeTruthy();
      });
    });

    describe('Should be true when input contains special character:', () => {
      it.each(['40-abc', 'ABC!123'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.isNotAlphaNumber(input)).toBeTruthy();
      });
    });
  });

  describe('containsUpperCase', () => {
    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsUpperCase(input)).toBeFalsy();
      });
    });

    describe('Should be false when input has no letter of the alphabet:', () => {
      it.each(['123', '1234!', '!@#$'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsUpperCase(input)).toBeFalsy();
      });
    });

    describe('should be true when at least one letter is uppercase:', () => {
      it.each(['aBc', 'A', 'Abc', 'abcdefgH'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsUpperCase(input)).toBeTruthy();
      });
    });

    describe('should be false when there is no uppercase letter:', () => {
      it.each(['abc', 'a', 'abc', 'abcdefg'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsUpperCase(input)).toBeFalsy();
      });
    });
  });

  describe('containsLowerCase', () => {
    describe('Should be false when input is:', () => {
      it.each([null, undefined, '', ' '])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsLowerCase(input)).toBeFalsy();
      });
    });

    describe('Should be false when input has no letter of the alphabet:', () => {
      it.each(['123', '1234!', '!@#$'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsLowerCase(input)).toBeFalsy();
      });
    });

    describe('should be true when at least one letter is lowercase:', () => {
      it.each(['AbC', 'a', 'aBC', 'ABCDEFGh'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsLowerCase(input)).toBeTruthy();
      });
    });

    describe('should be false when there is no lowercase letter:', () => {
      it.each(['ABC', 'A', 'ABC', 'ABCDEF'])('"%s"', (input: StringOrNullOrUndefined) => {
        expect(String.containsLowerCase(input)).toBeFalsy();
      });
    });
  });
});
