function reception(arr) {
    let worker1Efficiency = +(arr.shift())
    let worker2Efficiency = +(arr.shift())
    let worker3Efficiency = +(arr.shift())
    let people = +(arr.shift())
    let summedEff = worker1Efficiency + worker2Efficiency + worker3Efficiency
    let workingHours = 0
    while (people > 0) {
        if ((workingHours + 1) % 4 === 0 && workingHours !== 0) {
            workingHours++
        }
        else {
            people -= summedEff
            workingHours++
        }
    }
    console.log(`Time needed: ${workingHours}h.`)

}
reception(['5', '6', '4', '20'])
reception(['1', '2', '3', '45'])