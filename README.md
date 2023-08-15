# string-craft

Simple string manipulation library for TypeScript.

[![npm](https://img.shields.io/npm/v/string-craft)](https://www.npmjs.com/package/string-craft)
[![npm](https://img.shields.io/npm/dw/string-craft)](https://www.npmjs.com/package/string-craft)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Jojo-craft_string-craft&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Jojo-craft_string-craft)
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

#### <a id="empty"/> EMPTY

```typescript
String.EMPTY;
// ""
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
|           [`containsNumber`](#containsNumber)           |                Indicates whether the specified string contains at least one numeric digit (reverse with `notContainsNumber` method).                 |
|            [`containsAlpha`](#containsAlpha)            |             Indicates whether the specified string contains at least one alphabetic character (reverse with `notContainsAlpha` method).              |

#### <a id="isNullOrEmpty"/> isNullOrEmpty

```typescript
String.isNullOrEmpty('value');
// false

String.isNullOrEmpty('  ');
// false

String.isNullOrEmpty('');
// true
```

#### <a id="isNullOrBlank"/> isNullOrBlank

```typescript
String.isNullOrBlank('value');
// false

String.isNullOrBlank('  ');
// true

String.isNullOrBlank('');
// true
```

#### <a id="removeAccents"/> removeAccents

```typescript
String.removeAccents('déjà là');
// 'deja la'
```

#### <a id="join"/> join

```typescript
String.join('; ', 'apple', 'banana', 'orange', 'grape');
// 'apple; banana; orange; grape'
```

#### <a id="countWords"/> countWords

```typescript
String.countWords('Hello world');
// 2

String.countWords('hello - all the world ! WAIT!');
// 5
```

#### <a id="isNumber"/> isNumber

```typescript
String.isNumber('Hello world');
// false

String.isNumber('');
// false

String.isNumber('  ');
// false

String.isNumber(null);
// false

String.isNumber('99');
// true
```

#### <a id="isAlpha"/> isAlpha

```typescript
String.isAlpha('123abc');
// false

String.isAlpha('abc');
// true
```

#### <a id="containsSpecialCharacter"/> containsSpecialCharacter

```typescript
String.containsSpecialCharacter('123abc');
// false

String.containsSpecialCharacter('123abc/');
// true
```

#### <a id="containsNumber"/> containsNumber

```typescript
String.containsNumber('^abc1def+');
// true

String.containsNumber('!abc&def/');
// false
```

#### <a id="containsAlpha"/> containsAlpha

```typescript
String.containsAlpha('^123a456+');
// true

String.containsAlpha('!123&456/');
// false
```

## License

This software is released under the terms of the **MIT license**. See `LICENSE`.


## Contribute

### Install

```shell
npm install
```

### Test

#### Unit test
The code is covered by unit tests.

```shell
npm run test
```

#### Mutation test
Possibility to run mutation tests with [Stryker](https://stryker-mutator.io/docs/stryker-js/introduction/).
```shell
npm run test:mutation
```

