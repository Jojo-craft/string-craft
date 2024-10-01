# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 📦 [2.4.2] - 2024-10-01

### 🐞 Fixed

- Updating dependencies that were having issues.

## 📦 [2.4.1] - 2024-07-06

#### 🔧 Changed

- Changing the JS target used.

### 🐞 Fixed

- Updating dependencies that were having issues. 


## 📦 [2.4.0] - 2023-09-08

### 💎 Added
- Methods:
  - `valueOrEmpty`: Returns an empty string if the value is null, undefined, or blank; otherwise, returns the input value. 


## 📦 [2.3.0] - 2023-08-23

### 🔧 Changed

- Methods:
  - `toNumber`: will no longer return NaN, if the number is not correct, will return 0.


## 📦 [2.2.0] - 2023-08-19

### 🐞 Fixed
- Methods:
  - `isNumber`: decimal values did not return true...

### 💎 Added
- Methods:
  - `toNumber`
  - `toBoolean`



## 📦 [2.1.0] - 2023-08-16

### 💎 Added

- Methods:
  - `isEmpty` | `isNotEmpty`
  - `isBlank` | `isNotBlank`
  - `isAlphaNumber` | `isNotAlphaNumber`
  - `containsUpperCase`
  - `containsLowerCase`
  - `isBasicStrongPassword`



## 📦 [2.0.0] - 2023-08-14

### 🔧 Changed 

- Fields:
  - **[Breaking change]** rename static read-only field `empty` to `EMPTY`

### 💎 Added

- Methods: 
  - `isAlpha` | `isNotAlpha`
  - `containsSpecialCharacter` | `notContainsSpecialCharacter`
  - `containsNumber` | `notContainsNumber`
  - `containsAlpha` | `notContainsAlpha`



## 📦 [1.0.1] - 2023-08-13

### 💎 Added

- `String` class with:
  - Field:
    - `empty`
  - Methods:
    - `isNullOrEmpty` | `isNotNullOrEmpty`
    - `isNullOrBlank` | `isNotNullOrBlank`
    - `removeAccents`
    - `join`
    - `countWords`
    - `isNumber` | `isNotNumber`

