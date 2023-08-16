# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 📦 [Unreleased] 

### 💎 Added

- Methods:
  - `isEmpty` | `isNotEmpty`
  - `isBlank` | `isNotBlank`
  - `isAlphaNumber` | `isNotAlphaNumber`
  - `containsUpperCase`
  - `containsLowerCase`
  - `isBasicStrongPassword`

### ⛏️ Work in progress

- Methods:
  - `formatNumber(string): string` (replace '.' by ',')

### 💡 Ideas for future release

- `toNumber(string): number`: parse string to number.
- `toBoolean(string): boolean`: parse string to boolean (case insensitive).
- `removeWords`: remove list of words from a given string.
- `wordsToArray(string): string[]`: returns the words of a sentence in an array.
    Example : `wordsToArray('Hello the world') => ['Hello', 'the', 'world']`.
- Case style:
  - `camelCase`: convert string to camelCase.
  - `upperCamelCase`: convert string to UpperCamelCase.
  - `snakeCase`: convert string to snake_case.
  - `kebabCase`: convert string to kebab-case.

---

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

---

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

---

## 📦 [Template] - YYYY-MM-dd

### 💎 Added
for new features

### 🔧 Changed
for changes in existing functionality

### 🚧 Deprecated
for soon-to-be removed features

### 🗑️ Removed
for now removed features

### 🐞 Fixed
for any bug fixes

### 🦺 Security
in case of vulnerabilities

--- 

### 💡 Ideas for future release
### ⛏️ Work in progress
