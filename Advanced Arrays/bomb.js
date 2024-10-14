function bomb(numbers, bombInfo) {
    let bombNumber = +bombInfo[0]
    let bombPower = +bombInfo[1]
    let currentBomb = numbers.indexOf(bombNumber)
    while (currentBomb != -  1) {
        if (currentBomb + bombPower > numbers.length - 1) {
            numbers.splice(currentBomb)
        }
        else {
            numbers.splice(currentBomb, bombPower + 1)
        }
        if (currentBomb - bombPower < 0) {
            numbers.splice(0, currentBomb + 1)
        }
        else {
            numbers.splice(currentBomb - bombPower, bombPower)
        }
        currentBomb = numbers.indexOf(bombNumber)
    }
    let sum = numbers.reduce((acc, curr) => { return acc + curr }, 0)
    console.log(sum)
}
bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)
bomb([0, 1, 2, 3, 1, 3, 1], [1, 2])