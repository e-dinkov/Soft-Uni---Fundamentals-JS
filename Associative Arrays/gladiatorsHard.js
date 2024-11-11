function processingGladiatorInfo(input) {
    let gladiators = {}
    let totalSkill = "totalSkill"
    for (let element of input) {
        if (element.includes("Ave Cesar")) {
            break;
        }
        if (element.includes(" vs ")) {
            let [fighter1, fighter2] = element.split(" vs ")
            if ((fighter1 in gladiators) && (fighter2 in gladiators)) {//check for existing names
                let firstFighterElements = new Set(Object.keys(gladiators[fighter1]))
                let secondFighterElements = new Set(Object.keys(gladiators[fighter2]))
                let isThereCommonTech = false //now i will check for common techinique
                for (let key of firstFighterElements) {
                    if (key != "totalSkill") {
                        if (secondFighterElements.has(key)) {
                            isThereCommonTech = true
                        }
                    }
                }
                if (isThereCommonTech === false) //check for common techniques
                {
                    continue
                }
                totalSkill = "totalSkill"
                if (gladiators[fighter1][totalSkill] > gladiators[fighter2][totalSkill]) {
                    delete gladiators[fighter2]
                }
                else {
                    delete gladiators[fighter1]

                }
            }
            continue
        }
        let [name, techninique, skill] = element.split(" -> ")
        if (name in gladiators) {
            if (techninique in gladiators[name]) {
                if (gladiators[name][techninique] < Number(skill)) {
                    gladiators[name][totalSkill] += Number(skill) - gladiators[name][techninique]
                    gladiators[name][techninique] = Number(skill)

                }
            }
            else {
                totalSkill = "totalSkill"
                gladiators[name][techninique] = Number(skill)
                gladiators[name][totalSkill] += Number(skill)


            }

        }
        else {
            totalSkill = "totalSkill"
            gladiators[name] = {}
            gladiators[name][techninique] = Number(skill)
            gladiators[name][totalSkill] = Number(skill)
        }
    }

    let gladiatorsEntries = Object.entries(gladiators)
    gladiatorsEntries.sort(([player1, OBJ1],[player2, OBJ2]) =>{
        totalSkill = "totalSkill"
         if(gladiators[player1][totalSkill]  === gladiators[player2][totalSkill]){
            return player1.localeCompare(player2)
        }
            return gladiators[player2][totalSkill] - gladiators[player1][totalSkill]
    })
    for(let [player, OBJ] of gladiatorsEntries){
        console.log(`${player}: ${gladiators[player][totalSkill]} skill`)
        let sortedTechniques = Object.entries(OBJ)
        sortedTechniques.sort(([tech1,skill1],[tech2,skill2]) =>{
            if(skill1 === skill2){
               return tech1.localeCompare(tech2)
            }
            return gladiators[player][tech2] - gladiators[player][tech1]
        })
        for(let [techninique,skillOFTechnique] of sortedTechniques){
            if(techninique!== "totalSkill"){
                console.log(`- ${techninique} <!> ${skillOFTechnique}`)
            }
        }
        
    }
 
   //console.log(gladiatorsEntries)
    //console.log(Object.entries(gladiators))
} processingGladiatorInfo([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)
/*processingGladiatorInfo([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
)*/