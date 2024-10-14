function sorting(arr) {

    sortedArray = arr.sort((a, b) => b - a)

    let outputArr = []

    for (let i = 0; i < arr.length / 2; i++) {
        outputArr.push(sortedArray[i])
        if (arr.length % 2 === 1 && i + 1 >= arr.length / 2) {
            break
        }
        outputArr.push(sortedArray[arr.length - i - 1])
    }

    console.log(outputArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, -1])