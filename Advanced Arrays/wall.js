function wall(walls) {
    let daysWork = []
    let money = 0

    while (true) {
        let notFinishedWalls = 0
        for (let i = 0; i < walls.length; i++) {
            if (walls[i] < 30) {
                notFinishedWalls++
                walls[i]++
            }

        } if (notFinishedWalls === 0) {
            break;
        }
        daysWork.push(notFinishedWalls * 195)

    }

    for (let elements of daysWork) {
        money += elements * 1900
    }
    console.log(`${daysWork.join(', ')}`)
    console.log(`${money} pesos`)

}
wall([17,
    22,
    17,
    19,
    17])
