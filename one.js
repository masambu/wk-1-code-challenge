// function to detect speed violations
function speedDetector(speed) {
    if (speed < 70) {
        // if speed is less than 70, its considered okay
        console.log('Ok')
    }
    else if (speed > 70) {
         // If speed is greater than 70, calculate demerit points
        const demeritPoints = Math.floor(speed - 70) / 5 // Calculate demerit points
        console.log(`Points : ${demeritPoints}`) // Log the calculated demerit points

         // Check if demerit points exceed 12
        if (demeritPoints > 12) {
            console.log(`License suspended`) // If over 12, suspend the license
        }
    }
    
}
// Calling the function with a speed of 165
speedDetector(165)
