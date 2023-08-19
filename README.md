# string-craft

[![npm](https://img.shields.io/npm/v/string-craft)](https://www.npmjs.com/package/string-craft)
[![npm](https://img.shields.io/npm/dw/string-craft)](https://www.npmjs.com/package/string-craft)

Simple string manipulation library for TypeScript.

`string-craft` is a comprehensive TypeScript library designed to simplify and enhance string manipulation tasks.

---

## CI Status

The following table lists live workflows from various CI providers.

| CI Provider                                                        | Build Status                                                                                                                                                                                                                                                 |
|:-------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [SonarCloud](https://www.sonarsource.com/products/sonarcloud/)     | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Jojo-craft_string-craft&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Jojo-craft_string-craft)                                                            |
| [GitHub actions](https://github.com/features/actions)              | [![build](https://github.com/Jojo-craft/string-craft/actions/workflows/build.yml/badge.svg)](https://github.com/Jojo-craft/string-craft/actions/workflows/build.yml)                                                                                         |
| [GitHub actions](https://github.com/features/actions)              | [![build](https://github.com/Jojo-craft/string-craft/actions/workflows/eslint.yml/badge.svg)](https://github.com/Jojo-craft/string-craft/actions/workflows/eslint.yml)                                                                                       |
| [GitHub actions](https://github.com/features/actions)              | [![build](https://github.com/Jojo-craft/string-craft/actions/workflows/tests.yml/badge.svg)](https://github.com/Jojo-craft/string-craft/actions/workflows/tests.yml)                                                                                         |
| [Codecov](https://about.codecov.io/)                               | [![codecov](https://codecov.io/gh/Jojo-craft/string-craft/branch/main/graph/badge.svg?token=QAHEKEG6FS)](https://codecov.io/gh/Jojo-craft/string-craft)                                                                                                      |
| [Stryker-mutator dashboard](https://dashboard.stryker-mutator.io/) | [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FJojo-craft%2Fstring-craft%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/Jojo-craft/string-craft/main) |

---

## Usage

### Install

```shell
npm i string-craft
```

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

|                          Name                           |                                                                              Description                                                                              |                              Input parameters                              |        Return         |
|:-------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:---------------------:|
|                  [`isEmpty`](#isEmpty)                  |                                  Indicates whether the specified string is an empty string ("") (reverse with `isNotEmpty` method).                                   |                              value: `string`                               |       `boolean`       |
|            [`isNullOrEmpty`](#isNullOrEmpty)            |                      Indicates whether the specified string is null, undefined or an empty string ("") (reverse with `isNotNullOrEmpty` method).                      |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       | 
|                  [`isBlank`](#isBlank)                  |                     Indicates whether a specified string is empty, or consists only of white-space characters (reverse with `isNotBlank` method).                     |                              value: `string`                               |       `boolean`       |
|            [`isNullOrBlank`](#isNullOrBlank)            |         Indicates whether a specified string is null, undefined, empty, or consists only of white-space characters (reverse with `isNotNullOrBlank` method).          |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       | 
|                 [`isNumber`](#isNumber)                 |                                 Indicates whether the specified string is a valid numeric string (reverse with `isNotNumber` method).                                 |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|                  [`isAlpha`](#isAlpha)                  |                              Indicates whether a given value consists only of alphabetic characters (reverse with `isNotAlpha` method).                               |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|            [`isAlphaNumber`](#isAlphaNumber)            |                   Indicates whether the specified string contains only alphabetic characters and numbers (reverse with `isNotAlphaNumber` method).                    |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|    [`isBasicStrongPassword`](#isBasicStrongPassword)    | Indicates whether the specified string contains at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and a minimum length of 12 characters. |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|           [`containsNumber`](#containsNumber)           |                         Indicates whether the specified string contains at least one numeric digit (reverse with `notContainsNumber` method).                         |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|            [`containsAlpha`](#containsAlpha)            |                      Indicates whether the specified string contains at least one alphabetic character (reverse with `notContainsAlpha` method).                      |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
| [`containsSpecialCharacter`](#containsSpecialCharacter) |                     Indicates whether a given string contains at least one special character (reverse with `notContainsSpecialCharacter` method).                     |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|        [`containsUpperCase`](#containsUpperCase)        |                                            Indicates whether the specified string contains at least one uppercase letter.                                             |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|        [`containsLowerCase`](#containsLowerCase)        |                                            Indicates whether the specified string contains at least one lowercase letter.                                             |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |
|            [`removeAccents`](#removeAccents)            |                                                                 Removes accents from a given string.                                                                  |                              value: `string`                               |       `string`        |
|                     [`join`](#join)                     |                                          Concatenates an array of strings using the specified separator between each member.                                          | separator: `string`, values: (`string` &#124; `null` &#124; `undefined`)[] |       `string`        |
|               [`countWords`](#countWords)               |                                                               Counts the number of words in a sentence.                                                               |            sentence: `string` &#124; `null` &#124; `undefined`             |       `number`        |
|                 [`toNumber`](#toNumber)                 |                                                 Converts a string representation of a number to a JavaScript number.                                                  |              value: `string` &#124; `null` &#124; `undefined`              | `number` &#124; `NaN` |
|                [`toBoolean`](#toBoolean)                |                                                         Converts a string representation to a boolean value.                                                          |              value: `string` &#124; `null` &#124; `undefined`              |       `boolean`       |


#### <a id="isEmpty"/> isEmpty

```typescript
String.isEmpty('value');
// false

String.isEmpty('  ');
// false

String.isEmpty('');
// true
```


#### <a id="isNullOrEmpty"/> isNullOrEmpty

```typescript
String.isNullOrEmpty('value');
// false

String.isNullOrEmpty('  ');
// false

String.isNullOrEmpty(null);
// true

String.isNullOrEmpty('');
// true
```

#### <a id="isBlank"/> isBlank

```typescript
String.isBlank('value');
// false

String.isBlank('  ');
// true

String.isBlank('');
// true
```

#### <a id="isNullOrBlank"/> isNullOrBlank

```typescript
String.isNullOrBlank('value');
// false

String.isNullOrBlank('  ');
// true

String.isNullOrBlank(null);
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

#### <a id="isAlphaNumber"/> isAlphaNumber

```typescript
String.isAlphaNumber('123abc');
// true

String.isAlphaNumber('abc');
// false

String.isAlphaNumber('123');
// false

String.isAlphaNumber('abc-123');
// false
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

#### <a id="containsUpperCase"/> containsUpperCase

```typescript
String.containsUpperCase('abcDef');
// true

String.containsUpperCase('abcdef');
// false

String.containsUpperCase('12!@');
// false
```

#### <a id="containsLowerCase"/> containsLowerCase

```typescript
String.containsLowerCase('ABCdEF');
// true

String.containsLowerCase('ABCD');
// false

String.containsLowerCase('12!@');
// false
```

#### <a id="isBasicStrongPassword"/> isBasicStrongPassword

```typescript
String.isBasicStrongPassword('123456789AB@');
// false

String.isBasicStrongPassword('123456789ab@');
// false

String.isBasicStrongPassword('12345678901@');
// false

String.isBasicStrongPassword('123456789aBC');
// false

String.isBasicStrongPassword('123abC#$');
// false

String.isBasicStrongPassword('1234abcefgH!');
// true
```

#### <a id="toNumber"/> toNumber

```typescript
String.toNumber(null);
// NaN
```

```typescript
String.toNumber(undefined);
// NaN
```

```typescript
String.toNumber('   ');
// NaN
```

```typescript
String.toNumber('A123@');
// NaN
```

```typescript
String.toNumber('false');
// NaN
```

```typescript
String.toNumber('10');
// 10
```

```typescript
String.toNumber('-10');
// -10
```

```typescript
String.toNumber('10.1234');
// 10.1234
```

#### <a id="toBoolean"/> toBoolean

```typescript
String.toBoolean(undefined);
// false
```

```typescript
String.toBoolean(' ');
// false
```

```typescript
String.toBoolean('1');
// true
```

```typescript
String.toBoolean('true');
// true
```

---

## License

This software is released under the terms of the **MIT license**. See `LICENSE`.

---

## Contribute

The code is written in TDD and therefore has a nice code coverage by the tests, 
please keep this cap ;)

### Install

```shell
npm install
```

### Test

#### Unit test
The code is covered by unit tests with [Vitest](https://vitest.dev/).

```shell
npm run test
```

##### Coverage

```shell
npm run test:coverage
```

#### Mutation test
Possibility to run mutation tests with [Stryker](https://stryker-mutator.io/docs/stryker-js/introduction/).
```shell
npm run test:mutation
```

