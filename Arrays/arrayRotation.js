function fundamentals(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr[i])
        //arr.shift()

    } arr = arr.slice(n)
    console.log(arr.join(' '))
}
fundamentals([51, 47, 32, 61, 21], 2)