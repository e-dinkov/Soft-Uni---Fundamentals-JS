function houseParty(arr) {
    let goingList = []
    for (element of arr) {
        let parts = element.split(' ')
        let name = parts[0]
        if (parts[2] === 'not') {
            if (goingList.includes(name) === true) {
                goingList.splice(goingList.indexOf(name), 1)
            }
            else {
                console.log(`${name} is not in the list!`)
            }
        }
        if (parts[2] !== 'not') {
            if (goingList.includes(name) === true) {
                console.log(`${name} is already in the list!`)
            }
            else {
                goingList.push(name)
            }
        }
    }
    console.log(goingList.join('\n'))
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

)