# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] (2.0.0)

### Changed 

- Fields:
  - **[Breaking change]** rename static readonly field `empty` to `EMPTY`

### Added

- Methods: 
  - `isAlpha` | `isNotAlpha`
  - `containsSpecialCharacter` | `notContainsSpecialCharacter`

## [1.0.1] - 2023-08-13

### Added

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
