function addAndSubstract(num1, num2, num3) {
    let add = (a, b) => {
        return a + b
    }
    let substract = (a, b) => {
        return a - b
    }
    console.log(substract(add(num1, num2), num3))

}
addAndSubstract(23, 6, 10)