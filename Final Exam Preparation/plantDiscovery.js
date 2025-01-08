function plantDiscovery(input) {
    let plants = {}
    let n = Number(input.shift())
    for (let i = 0; i < n; i++) {
        let [name, rarity] = input[i].split("<->")
        if (name in plants === false) {
            plants[name] = {}
            plants[name]["rarity"] = rarity
            plants[name]["ratings"] = []
        }
        else {
            plants[name]["rarity"] = rarity
        }
    }
    for (let i = n; i < input.length; i++) {
        if (input[i].includes("Rate")) {
            let [uselessCommand, name, hyphen, rating] = input[i].split(' ')
            if(name in plants === false){
                console.log("error")
                continue
            }
            plants[name]["ratings"].push(Number(rating))

        }
        if (input[i].includes("Update")) {
            let [uselessCommand, name, hyphen, rarity] = input[i].split(" ")
            if (name in plants === false) {
                console.log("error")
                continue
            }
            plants[name]["rarity"] = rarity
        }
        if (input[i].includes("Reset")) {
            let [uselessCommand, name] = input[i].split(" ")
            if (name in plants === false) {
                console.log("error")
                continue
            }
            delete plants[name]["ratings"]
            plants[name]["ratings"] = []


        }

    }
    console.log(`Plants for the exhibition:`)
    for (let currentPlant in plants) {
        let averageRating = 0
        let sumFinder = plants[currentPlant]['ratings']
        if (plants[currentPlant]['ratings'].length === 0) {
            averageRating = 0
        }
        else {
            for (let i = 0; i < sumFinder.length; i++) {
                averageRating += sumFinder[i]
            }
            averageRating = averageRating / sumFinder.length

        }
        console.log(`- ${currentPlant}; Rarity: ${plants[currentPlant]["rarity"]}; Rating: ${averageRating.toFixed(2)}`)
    }

}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

)