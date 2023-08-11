const EMPTY_STRING = '';

export class String {
  static EMPTY: string = EMPTY_STRING;

  static isNullOrEmpty(input: string): boolean {
    if (input == null) {
      return true;
    }

    if (input == EMPTY_STRING) {
      return true;
    }

    return false;
  }
}
