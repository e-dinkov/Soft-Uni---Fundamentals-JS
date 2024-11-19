function Race(input) {
    let names = input.shift().split(", ")
    let racers = {}
    for (const name of names) {
        racers[name] = 0
    }
    let letterPattern = /[A-Za-z]/
    let digitPattern = /[\d]/
    for (let command of input) {

        command = command.split('')
        let currentDistance = 0
        let currentName = ''
        for (let letter of command) {
            if (letterPattern.test(letter)) {
                currentName += letter
            }
            if (digitPattern.test(letter)) {
                currentDistance += Number(letter)
            }
        }
        if (currentName in racers) {
            racers[currentName] += currentDistance
        }

    }
    let racersArrayOBJ = Array.from(Object.entries(racers))
    racersArrayOBJ.sort(([RacerName1, distance1], [RacerName2, distance2]) => {
        return distance2 - distance1
    })
    let [firstPlace, useless1] = racersArrayOBJ[0]
    let [secondPlace, useless2] = racersArrayOBJ[1]
    let [thirdPlace, useless3] = racersArrayOBJ[2]

    console.log(`1st place: ${firstPlace}`)
    console.log(`2nd place: ${secondPlace}`)
    console.log(`3rd place: ${thirdPlace}`)
    //console.log(racersArrayOBJ)
}
Race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)
Race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)