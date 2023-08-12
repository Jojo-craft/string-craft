# simple-string-ts

Simple library to handle string operations with TypeScript.

## Install

```shell
npm i simple-string-ts
```

## Usage

### Import

```typescript
import { String } from 'simple-string-ts';
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
