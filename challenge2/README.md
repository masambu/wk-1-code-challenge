# Student Grade Generator

## Description
The `studentGradeGenerator` function is a JavaScript program that generates a grade based on the given student's mark. It determines the grade ('A', 'B', 'C', 'D', or 'E') according to specific mark ranges.

## Functionality
The function evaluates the input mark and assigns a grade as follows:
- 'E' if the mark is less than 40.
- 'D' if the mark is between 40 and 48 (inclusive).
- 'C' if the mark is between 49 and 58 (inclusive).
- 'B' if the mark is between 59 and 78 (inclusive).
- 'A' if the mark is 79 or greater.

## Author and License
This code was authored by Kelvin Masambu. It is provided under the KMSFT License (Version 1.0). For more information, see the `LICENSE` file in this repository.

## Usage
### Function Signature
```javascript
/**
 * Generates a grade based on the given mark.
 * @param {number} mark - The student's mark.
 * @returns {void} - Prints the corresponding grade to the console.
 */
function studentGradeGenerator(mark) { /* Function implementation */ }
