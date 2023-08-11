const EMPTY_STRING = '';

export type StringOrNullOrUndefined = Nullable<string> | Undefinable<string>;
export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;

export class String {
  static EMPTY: string = EMPTY_STRING;

  /**
   * Checks if a string is null, undefined, or empty.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} Returns true if the input string is null, undefined, or empty; otherwise, returns false.
   */
  static isNullOrEmpty(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return true;
    }

    return value == EMPTY_STRING;
  }

  /**
   * Checks if a string is not null, undefined, or empty.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} Returns true if the input string is not null, undefined, or empty; otherwise, returns false.
   */
  static isNotNullOrEmpty(value: StringOrNullOrUndefined): boolean {
    return !String.isNullOrEmpty(value);
  }

  /**
   * Checks if a string is null, undefined, or contains only whitespace characters.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} Returns true if the input string is null, undefined, or contains only whitespace characters; otherwise, returns false.
   */
  static isNullOrBlank(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return true;
    }

    if (String.isNullOrEmpty(value)) {
      return true;
    }

    return value.trim().length == 0;
  }

  /**
   * Checks if a string is not null, undefined, or contains only whitespace characters.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} Returns true if the input string is not null, undefined, or contains only whitespace characters; otherwise, returns false.
   */
  static isNotNullOrBlank(value: StringOrNullOrUndefined): boolean {
    return !String.isNullOrBlank(value);
  }

  /**
   * Removes accents from a given string.
   *
   * @param {string} value - The input string with accents.
   * @returns {string} Returns a new string with accents replaced by their non-accented equivalents.
   * @example
   * const withoutAccents = String.removeAccents('déjà vu');
   * console.log(withoutAccents); // Output: 'deja vu'
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
        if (new RegExp(accentsMap[letter], 'i').test(match)) {
          return match === match.toLowerCase() ? letter : letter.toUpperCase();
        }
      }
      return match;
    });
  }
}
