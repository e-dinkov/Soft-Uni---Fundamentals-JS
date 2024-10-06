function oddAndEven(number) {
    number = number.toString()
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < number.length; i++) {
        let currentElement = +number[i]
        if (currentElement % 2 === 0) {
            evenSum += currentElement
        }
        else {
            oddSum += currentElement;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
oddAndEven(1000435)