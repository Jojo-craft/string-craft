const EMPTY_STRING = '';

export type StringOrNullOrUndefined = Nullable<string> | Undefinable<string>;
export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;

export class ArgumentNullError implements Error {
  name: string;

  constructor(public message: string) {
    this.name = 'ArgumentNullError';
  }
}

export class String {
  /**
   * Represents the empty string. This field is read-only.
   * The value of this field is the zero-length string, "".
   */
  static readonly empty: string = EMPTY_STRING;

  /**
   * Indicates whether the specified string is null, undefined or an empty string ("").
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} True if the value parameter is null or undefined or an empty string (""); otherwise, false.
   */
  static isNullOrEmpty(value: StringOrNullOrUndefined): boolean {
    if (value == undefined) {
      return true;
    }

    return value == EMPTY_STRING;
  }

  /**
   * Reverse of isNullOrEmpty method.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} False if the value parameter is null or undefined or an empty string (""); otherwise, true.
   */
  static isNotNullOrEmpty(value: StringOrNullOrUndefined): boolean {
    return !String.isNullOrEmpty(value);
  }

  /**
   * Indicates whether a specified string is null, undefined, empty, or consists only of white-space characters.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} True if the value parameter is null or undefined or Empty, or if value consists exclusively of white-space characters; otherwise, false.
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
   * Reverse of isNullOrBlank method.
   *
   * @param {string | null | undefined} value - The string value to check.
   * @returns {boolean} False if the value parameter is null or undefined or Empty, or if value consists exclusively of white-space characters; otherwise, true.
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
   * console.log(String.removeAccents('déjà vu'));
   * // Output: 'deja vu'
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

  /**
   * Concatenates an array of strings using the specified separator between each member.
   *
   * @throws {ArgumentNullError} If any of the arguments is null or undefined.
   *
   * @param {string} separator - The character to use as a separator between the concatenated values.
   * Separator is included in the returned string only if the value has more than one element.
   * @param {...string} values - The array of strings to concatenate.
   * @returns {string} A string that consists of the elements of values delimited by the separator character.
   * @example
   * console.log(String.join('; ', 'apple', 'banana', 'orange', 'grape'));
   * // Output: 'apple; banana; orange; grape'
   */
  static join(separator: string, ...values: StringOrNullOrUndefined[]): string {
    let result: string = EMPTY_STRING;
    for (const value of values) {
      if (value == undefined) {
        throw new ArgumentNullError('Any of the arguments is null or undefined.');
      }

      if (result == EMPTY_STRING) {
        result = value;
      } else {
        result += `${separator}${value}`;
      }
    }

    return result;
  }
}
