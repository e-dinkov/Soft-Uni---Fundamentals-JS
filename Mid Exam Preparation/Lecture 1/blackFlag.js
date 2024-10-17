function blackFlag(arr) {
    let days = +arr[0]
    let dailyPlunder = +arr[1]
    let targetPlunder = +arr[2]
    let totalPlunder = 0
    for (let i = 1; i <= days; i++) {
        dailyPlunder = +arr[1]
        if (i % 3 === 0) {
            dailyPlunder = dailyPlunder * 1.5
        }
        totalPlunder += dailyPlunder
        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.7
        }

    }
    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    }
    else {
        console.log(`Collected only ${((totalPlunder / targetPlunder) * 100).toFixed(2)}% of the plunder.`)
    }


}
blackFlag(["5",
    "40",
    "100"])
