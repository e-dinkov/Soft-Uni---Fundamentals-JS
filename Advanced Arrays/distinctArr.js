function distinctive(arr) {
    let set1 = new Set(arr);


    let newArr = Array.from(set1)


    console.log(newArr.join(' '))
}
distinctive([7, 8, 9, 7, 2, 3, 4, 1, 2])