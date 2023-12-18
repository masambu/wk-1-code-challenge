function studentGradeGenerator(mark) {
    if (mark < 40) {
        console.log('E')  // Print 'E' for marks less than 40
    }
    if (mark > 40 && mark < 49) {
        console.log('D') // Print 'D' for marks between 40 and 48 (inclusive)
    }
    if (mark > 49 && mark < 59) {
        console.log('C') // Print 'C' for marks between 49 and 58 (inclusive)
    }
    if (mark > 60 && mark < 79) {
        console.log('B') // Print 'B' for marks between 59 and 78 (inclusive)
    }
    if (mark > 79) {
        console.log('A') // Print 'A' for marks 79 or greater
    }
}
studentGradeGenerator(56)