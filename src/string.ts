const EMPTY_STRING = '';

export type StringOrNullOrUndefined = Nullable<string> | Undefinable<string>;
export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;

/**
 * Utility class for string-related operations.
 */
export class String {
  /**
   * Represents the empty string ("").
   * This field is read-only.
   * @const {string}
   */
  static readonly EMPTY: string = EMPTY_STRING;

  /**
   * Indicates whether the specified string is an empty string ("").
   * @param {string} value - The string value to check.
   * @returns {boolean} True if the value parameter is an empty string (""); otherwise, false.
   */
  static isEmpty(value: string): boolean {
    return value == EMPTY_STRING;
  }

  /**
   * Reverse of **isEmpty()** method.
   * @param {string} value - The string value to check.
   * @returns {boolean} False if the value parameter is an empty string (""); otherwise, true.
   */
  static isNotEmpty(value: string): boolean {
    return !String.isEmpty(value);
  }

  /**
   * Indicates whether the specified string is null, undefined or an empty string ("").
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} True if the value parameter is null or undefined or an empty string (""); otherwise, false.
   */
  static isNullOrEmpty(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return true;
    }

    return String.isEmpty(value);
  }

  /**
   * Reverse of **isNullOrEmpty()** method.
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} False if the value parameter is null or undefined or an empty string (""); otherwise, true.
   */
  static isNotNullOrEmpty(value: StringOrNullOrUndefined): boolean {
    return !String.isNullOrEmpty(value);
  }

  /**
   * Indicates whether a specified string is empty, or consists only of white-space characters.
   * @param {string} value - The string value to check.
   * @returns {boolean} True if the value parameter is Empty, or if value consists exclusively of white-space characters; otherwise, false.
   */
  static isBlank(value: string): boolean {
    return value.trim().length == 0;
  }

  /**
   * Reverse of **isBlank()** method.
   * @param {string} value - The string value to check.
   * @returns {boolean} False if the value parameter is Empty or blank; otherwise, true.
   */
  static isNotBlank(value: string): boolean {
    return !String.isBlank(value);
  }

  /**
   * Indicates whether a specified string is null, undefined, empty, or consists only of white-space characters.
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} True if the value parameter is null or undefined or Empty, or if value consists exclusively of white-space characters; otherwise, false.
   */
  static isNullOrBlank(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return true;
    }

    return String.isBlank(value);
  }

  /**
   * Reverse of **isNullOrBlank()** method.
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} False if the value parameter is null or undefined or Empty, or if value consists exclusively of white-space characters; otherwise, true.
   */
  static isNotNullOrBlank(value: StringOrNullOrUndefined): boolean {
    return !String.isNullOrBlank(value);
  }

  /**
   * Removes accents from a given string.
   * @param {string} value - The input string with accents.
   * @returns {string} Returns a new string with accents replaced by their non-accented equivalents.
   * @example
   * String.removeAccents('déjà vu');
   * // 'deja vu'
   */
  static removeAccents(value: string): string {
    const accentsMap: { [accentedLetter: string]: string } = {
      a: '[aàáâãäå]',
      e: '[eèéêë]',
      i: '[iìíîï]',
      o: '[oòóôõö]',
      u: '[uùúûü]',
      c: '[cç]',
      n: '[nñ]',
      s: 'ß',
      A: '[AÀÁÂÃÄÅ]',
      E: '[EÈÉÊË]',
      I: '[IÌÍÎÏ]',
      O: '[OÒÓÔÕÖ]',
      U: '[UÙÚÛÜ]',
      C: '[CÇ]',
      N: '[NÑ]',
      S: 'ẞ',
    };

    const accentsRegex = new RegExp(Object.values(accentsMap).join('|'), 'g');

    return value.replace(accentsRegex, (match) => {
      for (const letter in accentsMap) {
        if (new RegExp(accentsMap[letter]).test(match)) {
          return letter;
        }
      }
      return match;
    });
  }

  /**
   * Concatenates an array of strings using the specified separator between each member.
   * @throws {Error} If any of the arguments is null or undefined.
   * @param {string} separator - The character to use as a separator between the concatenated values.
   * Separator is included in the returned string only if the value has more than one element.
   * @param {...string} values - The array of strings to concatenate.
   * @returns {string} A string that consists of the elements of values delimited by the separator character.
   * @example
   * String.join('; ', 'apple', 'banana', 'orange', 'grape');
   * // 'apple; banana; orange; grape'
   */
  static join(separator: string, ...values: StringOrNullOrUndefined[]): string {
    let result: string = EMPTY_STRING;
    for (const value of values) {
      if (value == undefined) {
        throw new Error('Any of the arguments is null or undefined.');
      }

      if (result == EMPTY_STRING) {
        result = value;
      } else {
        result += `${separator}${value}`;
      }
    }

    return result;
  }

  /**
   * Counts the number of words in a sentence.
   * @param {StringOrNullOrUndefined} sentence - The input sentence to count words in.
   * @returns {number} The count of words in the sentence.
   * @example
   * String.countWords("Hello world");
   * // 2
   * @example
   * String.countWords("Coding is fun! #JavaScript");
   * // 4
   */
  static countWords(sentence: StringOrNullOrUndefined): number {
    if (sentence == undefined || String.isNullOrBlank(sentence)) {
      return 0;
    }

    const spaceSeparator = /\s/;
    const wordFilter = (word: string): boolean => word != EMPTY_STRING;
    const nonAlphanumericWordFilter = (word: string): boolean => !/^\W/.test(word);

    return sentence.split(spaceSeparator).filter(wordFilter).filter(nonAlphanumericWordFilter).length;
  }

  /**
   * Indicates whether the specified string is a valid numeric string.
   * @param {StringOrNullOrUndefined} value - The value to check.
   * @returns {boolean} True if the value is a valid numeric string; otherwise, false.
   */
  static isNumber(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    if (String.isBlank(value)) {
      return false;
    }

    return Number.isFinite(+value);
  }

  /**
   * Reverse of **isNumber()** method.
   * @param {StringOrNullOrUndefined} value - The value to check.
   * @returns {boolean} True if the value is not a numeric string; otherwise, false.
   */
  static isNotNumber(value: StringOrNullOrUndefined): boolean {
    return !String.isNumber(value);
  }

  /**
   * Indicates whether a given value consists only of alphabetic characters.
   * @param {StringOrNullOrUndefined} value - The value to check.
   * @returns {boolean} True if the value consists only of alphabetic characters; otherwise, false.
   */
  static isAlpha(value: StringOrNullOrUndefined): boolean {
    if (String.isNullOrBlank(value)) {
      return false;
    }

    if (String.containsSpecialCharacter(value)) {
      return false;
    }

    if (String.containsNumber(value)) {
      return false;
    }

    return !Number.isNaN(value);
  }

  /**
   * Reverse of **isAlpha()** method.
   * @param {StringOrNullOrUndefined} value - The value to check.
   * @returns {boolean} False if the value consists only of alphabetic characters; otherwise, true.
   */
  static isNotAlpha(value: StringOrNullOrUndefined): boolean {
    return !String.isAlpha(value);
  }

  /**
   * Indicates whether a given string contains at least one special character.
   * @param {string} value - The string to check.
   * @returns {boolean} True if the string contains at least one special character; otherwise, false.
   */
  static containsSpecialCharacter(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/;
    return specialCharacters.test(value);
  }

  /**
   * Reverse of **containsSpecialCharacter()** method.
   * @param {string} value - The string to check.
   * @returns {boolean} False if the string contains at least one special character; otherwise, true.
   */
  static notContainsSpecialCharacter(value: StringOrNullOrUndefined): boolean {
    return !String.containsSpecialCharacter(value);
  }

  /**
   * Indicates whether the specified string contains at least one numeric digit.
   * @param {StringOrNullOrUndefined} value - The string value to check.
   * @returns {boolean} True if the value contains at least one numeric digit; otherwise, false.
   */
  static containsNumber(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    const numberRegex = /\d/;
    return numberRegex.test(value);
  }

  /**
   * Reverse of **containsNumber()** method.
   * @param {StringOrNullOrUndefined} value - The string value to check.
   * @returns {boolean} False if the value contains at least one numeric digit; otherwise, true.
   */
  static notContainsNumber(value: StringOrNullOrUndefined): boolean {
    return !String.containsNumber(value);
  }

  /**
   * Indicates whether the specified string contains at least one alphabetic character.
   * @param {StringOrNullOrUndefined} value - The string value to check.
   * @returns {boolean} True if the value contains at least one alphabetic character; otherwise, false.
   */
  static containsAlpha(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    const alphaRegex = /[a-zA-Z]/;
    return alphaRegex.test(value);
  }

  /**
   * Reverse of **containsAlpha()** method.
   * @param {StringOrNullOrUndefined} value - The string value to check.
   * @returns {boolean} False if the value contains at least one alphabetic character; otherwise, true.
   */
  static notContainsAlpha(value: StringOrNullOrUndefined): boolean {
    return !String.containsAlpha(value);
  }

  /**
   * Indicates whether the specified string contains both alphabetic characters and numbers,
   * and does not contain any special characters.
   * @param {StringOrNullOrUndefined} value - The string to check.
   * @returns {boolean} True if the string contains both alphabetic characters and numbers; otherwise false.
   */
  static isAlphaNumber(value: StringOrNullOrUndefined): boolean {
    if (String.isNullOrBlank(value)) {
      return false;
    }

    if (String.isAlpha(value)) {
      return false;
    }

    if (String.isNumber(value)) {
      return false;
    }

    return !String.containsSpecialCharacter(value);
  }

  /**
   * Reverse of **isAlphaNumber()** method.
   * @param {StringOrNullOrUndefined} value - The string to check.
   * @returns {boolean} False if the string contains both alphabetic characters and numbers; otherwise true.
   */
  static isNotAlphaNumber(value: StringOrNullOrUndefined): boolean {
    return !String.isAlphaNumber(value);
  }

  /**
   * Indicates whether the specified string contains at least one uppercase letter.
   * @param {StringOrNullOrUndefined} value - The string to check.
   * @returns {boolean} True if the string contains at least one uppercase letter; otherwise false.
   */
  static containsUpperCase(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    for (const character of value) {
      if (String.isNotAlpha(character)) {
        continue;
      }

      if (character == character.toUpperCase()) {
        return true;
      }
    }

    return false;
  }

  /**
   * Indicates whether the specified string contains at least one lowercase letter.
   * @param {StringOrNullOrUndefined} value - The string to check.
   * @returns {boolean} True if the string contains at least one lowercase letter; otherwise false.
   */
  static containsLowerCase(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    for (const character of value) {
      if (String.isNotAlpha(character)) {
        continue;
      }

      if (character == character.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  /**
   * Indicates whether the specified string contains at least 1 uppercase letter,
   * 1 lowercase letter, 1 number, 1 special character
   * and a minimum length of 12 characters.
   * @param {StringOrNullOrUndefined} value - The string to check.
   * @returns {boolean} True if the string is a strong password; otherwise false.
   */
  static isBasicStrongPassword(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    if (!String.containsLowerCase(value)) {
      return false;
    }

    if (!String.containsUpperCase(value)) {
      return false;
    }

    if (String.notContainsSpecialCharacter(value)) {
      return false;
    }

    return value.length >= 12;
  }

  /**
   * Converts a string representation of a number to a JavaScript number.
   * @param {StringOrNullOrUndefined} value - The string value to convert to a number.
   * @returns {number | typeof NaN} The converted number, or NaN (Not a number) if the input is not a valid number.
   */
  static toNumber(value: StringOrNullOrUndefined): number | typeof NaN {
    if (value == undefined) {
      return Number.NaN;
    }

    if (String.isNotNumber(value)) {
      return Number.NaN;
    }

    return +value;
  }

  /**
   * Converts a string representation to a boolean value.
   * @param {StringOrNullOrUndefined} value - The string value to convert to a boolean.
   * @returns {boolean} The converted boolean value. Returns false for invalid inputs.
   */
  static toBoolean(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return false;
    }

    return value.toLowerCase() == 'true' || value == '1';
  }
}
