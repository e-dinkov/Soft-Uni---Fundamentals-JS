function carsInTheParking(arr) {
    let carInParkings = new Set()

    for (let i = 0; i < arr.length; i++) {
        let [direction, carNum] = arr[i].split(', ')
        if (direction === 'IN') {
            carInParkings.add(carNum)
        }
        if (direction === 'OUT') {
            carInParkings.delete(carNum)
        }

    }
    if (carInParkings.size === 0) {
        console.log("Parking Lot is Empty")
        return
    } carInParkings = Array.from(carInParkings)
    carInParkings.sort((a, b) => {
        return a.localeCompare(b)
    })
    for (const element of carInParkings) {
        console.log(element)
    }
}
carsInTheParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
carsInTheParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)