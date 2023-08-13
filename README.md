# string-craft

Simple string manipulation library for TypeScript.

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

|       Name        |                                                 Description                                                 |
|:-----------------:|:-----------------------------------------------------------------------------------------------------------:|
| [`empty`](#empty) | Represents the empty string. This field is readonly. The value of this field is the zero-length string, "". |

#### <a id="empty"/> Empty

###### Exemple
```typescript
console.log(String.empty);
// Output: ""
```

### Methods

|               Name                |                                                 Description                                                 |
|:---------------------------------:|:-----------------------------------------------------------------------------------------------------------:|
| [`isNullOrEmpty`](#isNullOrEmpty) |             Indicates whether the specified string is null, undefined or an empty string ("").              |
|        `isNotNullOrEmpty`         |                                      Reverse of isNullOrEmpty method.                                       |
| [`isNullOrBlank`](#isNullOrBlank) | Indicates whether a specified string is null, undefined, empty, or consists only of white-space characters. |
|        `isNotNullOrBlank`         |                                      Reverse of isNullOrBlank method.                                       |
| [`removeAccents`](#removeAccents) |                                    Removes accents from a given string.                                     |
|          [`join`](#join)          |             Concatenates an array of strings using the specified separator between each member.             |
|    [`countWords`](#countWords)    |                                  Counts the number of words in a sentence.                                  |

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
