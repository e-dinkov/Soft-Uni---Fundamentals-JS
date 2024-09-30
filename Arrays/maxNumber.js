function fundamentals(arr) {
    let top = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= currentElement) {
                isTop = false;
                break;
            }
        }

        if (isTop === true) {
            top.push(currentElement);
        }
    }
    console.log(top.join(' '))

}
fundamentals([1, 4, 3, 2])