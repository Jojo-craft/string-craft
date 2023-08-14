# string-craft

Simple string manipulation library for TypeScript.

[![npm](https://img.shields.io/npm/v/string-craft)](https://www.npmjs.com/package/string-craft)
[![npm](https://img.shields.io/npm/dw/string-craft)](https://www.npmjs.com/package/string-craft)
![build](https://github.com/Jojo-craft/string-craft/actions/workflows/build.yml/badge.svg)
![build](https://github.com/Jojo-craft/string-craft/actions/workflows/eslint.yml/badge.svg)
![build](https://github.com/Jojo-craft/string-craft/actions/workflows/tests.yml/badge.svg)
[![codecov](https://codecov.io/gh/Jojo-craft/string-craft/branch/main/graph/badge.svg?token=QAHEKEG6FS)](https://codecov.io/gh/Jojo-craft/string-craft)

`string-craft` is a comprehensive TypeScript library designed to simplify and enhance string manipulation tasks.

## Install

```shell
npm i string-craft
```

## Usage

### Import

```typescript
import { String } from 'string-craft';
```

### Fields

|       Name        |                                                  Description                                                  |
|:-----------------:|:-------------------------------------------------------------------------------------------------------------:|
| [`EMPTY`](#empty) | Represents the empty string. This field is read-only. The value of this field is the zero-length string (""). |

#### <a id="empty"/> Empty

###### Exemple
```typescript
console.log(String.EMPTY);
// Output: ""
```

### Methods

|                          Name                           |                                                                     Description                                                                      |
|:-------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------:|
|            [`isNullOrEmpty`](#isNullOrEmpty)            |             Indicates whether the specified string is null, undefined or an empty string ("") (reverse with `isNotNullOrEmpty` method).              |
|            [`isNullOrBlank`](#isNullOrBlank)            | Indicates whether a specified string is null, undefined, empty, or consists only of white-space characters (reverse with `isNotNullOrBlank` method). |
|            [`removeAccents`](#removeAccents)            |                                                         Removes accents from a given string.                                                         |
|                     [`join`](#join)                     |                                 Concatenates an array of strings using the specified separator between each member.                                  |
|               [`countWords`](#countWords)               |                                                      Counts the number of words in a sentence.                                                       |
|                 [`isNumber`](#isNumber)                 |                        Indicates whether the specified string is a valid numeric string (reverse with `isNotNumber` method).                         |
|                  [`isAlpha`](#isAlpha)                  |                      Indicates whether a given value consists only of alphabetic characters (reverse with `isNotAlpha` method).                      |
| [`containsSpecialCharacter`](#containsSpecialCharacter) |            Indicates whether a given string contains at least one special character (reverse with `notContainsSpecialCharacter` method).             |

#### <a id="isNullOrEmpty"/> isNullOrEmpty

###### Exemple
```typescript
console.log(String.isNullOrEmpty('value'));
// Output: false
```

#### <a id="isNullOrBlank"/> isNullOrBlank

###### Exemple
```typescript
console.log(String.isNullOrBlank('  '));
// Output: true
```

#### <a id="removeAccents"/> removeAccents

###### Exemple
```typescript
console.log(String.removeAccents('déjà là'));
// Output: 'deja la'
```

#### <a id="join"/> join

###### Exemple
```typescript
console.log(String.join('; ', 'apple', 'banana', 'orange', 'grape'));
// Output: 'apple; banana; orange; grape'
```

#### <a id="countWords"/> countWords

###### Exemple
```typescript
console.log(String.countWords('Hello world'));
// Output: 2

console.log(String.countWords('hello - all the world ! WAIT!'));
// Output: 5
```

#### <a id="isNumber"/> isNumber

###### Exemple
```typescript
console.log(String.isNumber('Hello world'));
// Output: false

console.log(String.isNumber(''));
// Output: false

console.log(String.isNumber('  '));
// Output: false

console.log(String.isNumber(null));
// Output: false

console.log(String.isNumber('99'));
// Output: true
```

#### <a id="isAlpha"/> isAlpha

###### Exemple
```typescript
console.log(String.isAlpha('123abc'));
// Output: false

console.log(String.isAlpha('abc'));
// Output: true
```

#### <a id="containsSpecialCharacter"/> containsSpecialCharacter

###### Exemple
```typescript
console.log(String.containsSpecialCharacter('123abc'));
// Output: false

console.log(String.containsSpecialCharacter('123abc/'));
// Output: true
```

## License

This software is released under the terms of the **MIT license**. See `LICENSE`.
