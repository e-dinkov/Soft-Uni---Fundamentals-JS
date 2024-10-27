function heart(arr) {
    let houses = arr.shift().split('@').map(x => +x)
    let cupidIndex = 0;
    for (let elements of arr) {
        if (elements.includes('Love!')) {
            break;
        }

        let elementParts = elements.split(' ')
        let jumpSize = +(elementParts.pop())
        if (jumpSize + cupidIndex >= houses.length) {
            cupidIndex = 0
        }
        else {
            cupidIndex += jumpSize
        }

        if (houses[cupidIndex] === 0) {
            console.log(`Place ${cupidIndex} already had Valentine's day.`)
        }

        if (houses[cupidIndex] <= 2 && houses[cupidIndex] > 0) {
            console.log(`Place ${cupidIndex} has Valentine's day.`)
            houses[cupidIndex] = 0
        }
        if (houses[cupidIndex] > 2) {
            houses[cupidIndex] -= 2
        }


    }
    let noValentinesHouses = houses.filter(x => x !== 0)
    console.log(`Cupid's last position was ${cupidIndex}.`)
    if(noValentinesHouses.length > 0 ){
            console.log(`Cupid has failed ${noValentinesHouses.length} places.`)
}
if(noValentinesHouses.length === 0)
{
    console.log('Mission was successful.')
}
}
heart(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
