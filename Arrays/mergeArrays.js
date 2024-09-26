function fundamentals(arr1, arr2) {
    let newArray = []
    for (let i = 0; i <= arr1.length - 1; i++) {
        let currentElement1 = +arr1[i];
        let currentElement2 = +arr2[i]
        if (i % 2 === 0) {
            newArray.push(currentElement1 + currentElement2)

        }
        else {
            newArray.push(`${arr1[i]}${arr2[i]}`)
        }
    }
    console.log(newArray.join(' - '))

}

fundamentals(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)