function fundamentals(arr) {
    let SmallestNum = arr[0];
    for (element of arr) {
        SmallestNum = Math.min(SmallestNum, element)
    }
    let index1 = arr.indexOf(SmallestNum);
    arr.splice(index1, 1);
    let secondSmallest = arr[0]
    for (element of arr) {
        secondSmallest = Math.min(secondSmallest, element)
    }
    console.log(`${SmallestNum} ${secondSmallest}`)
}
fundamentals([15, 3, 2, 5, 99])