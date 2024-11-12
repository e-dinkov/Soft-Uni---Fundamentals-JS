function lettersChangeNumbers(input) {
    let strings = input.split(" ")
    strings.forEach(string => string.trim())
    strings = strings.filter((string) => string != '')
    //console.log(strings)
    let totalSum = 0;
    for (let word of strings) {
        let prevLetter = ''
        let number = ''
        for (let letter of word) {
            let digitPattern = /[0-9]/
            if (digitPattern.test(letter)) {
                number += letter

            }
            else {
                if (number == '') {
                    prevLetter = letter
                }
                else {
                    let currentSum = 0   // the improtant part of calculating the score
                    let UpperCasePattern = /[A-Z]/
                    let LowerCasePattern = /[a-z]/
                    number = Number(number)
                    if (UpperCasePattern.test(prevLetter)) {
                        currentSum += number / ((prevLetter.charCodeAt(0)) - 64)

                    }
                    if (LowerCasePattern.test(prevLetter)) {
                        currentSum += number * ((prevLetter.charCodeAt(0)) - 96)

                    }
                    if (UpperCasePattern.test(letter)) {
                        currentSum -=  ((letter.charCodeAt(0)) - 64)

                    }
                    if (LowerCasePattern.test(letter)) {
                        currentSum += ((letter.charCodeAt(0)) - 96)

                    }
                    totalSum += currentSum
                    
                    
                }
            }
        }
    }
    console.log(totalSum.toFixed(2))
}
lettersChangeNumbers('P34562Z q2576f   H456z')
