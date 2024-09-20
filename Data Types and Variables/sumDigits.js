function fundamentals(number) {
    let stringNumber = number.toString()
    let length = stringNumber.length
    let sum = 0
    for (let i = 0; i < length; i++) {
        sum += Number(stringNumber[i]);
    }

    console.log(sum)

}
fundamentals(4142)