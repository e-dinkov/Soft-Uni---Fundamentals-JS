function train(arr) {
    let wagons = arr.shift().split(' ').map(x => Number(x))
    let capacity = +arr.shift()
    for (element of arr) {
        if (element.includes('Add')) {
            let extraWagon = +element.split(' ').pop()
            wagons.push(extraWagon)
        }
        else {
            let passengers = +element
            let index = 0;
            while (passengers !== 0) {
                if (wagons[index] + passengers > capacity) {
                    index++
                }
                else {
                    wagons[index] += passengers
                    passengers = 0;
                }

            }
        }
    }
    console.log(wagons.join(' '))
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']

)