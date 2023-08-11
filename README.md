# simple-string-ts

Simple string library for TypeScript. 

## Install

```shell
npm i simple-string-ts
```

## Usage

### Import

```typescript
import { String } from 'simple-string-ts';
```


### Methods

|        Name        |       Type        |                                                        Description                                                         |
|:------------------:|:-----------------:|:--------------------------------------------------------------------------------------------------------------------------:|
|      `EMPTY`       | `Static property` |                                                  Just an empty string ''                                                   |
|  `isNullOrEmpty`   |     `Method`      |                  Returns true if the input string is null, undefined, or empty; otherwise, returns false.                  |
| `isNotNullOrEmpty` |     `Method`      |                Returns true if the input string is not null, undefined, or empty; otherwise, returns false.                |
|  `isNullOrBlank`   |     `Method`      |   Returns true if the input string is null, undefined, or contains only whitespace characters; otherwise, returns false.   |
| `isNotNullOrBlank` |     `Method`      | Returns true if the input string is not null, undefined, or contains only whitespace characters; otherwise, returns false. |
|  `removeAccents`   |     `Method`      |                       Returns a new string with accents replaced by their non-accented equivalents.                        |

