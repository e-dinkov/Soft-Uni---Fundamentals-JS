function starEnigma(input) {
    let planetsNumber = Number(input.shift())
    let distractSTARpattern = /[starSTAR]/g
    let correctPlanetPattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<planetType>[AD]{1})![^@\-!:>]*->(?<planetSoldiers>\d+)/
    let attackedPlanets = []
    let destroyedPlanets = []

    for (let i = 0; i < planetsNumber; i++) {
        //console.log(input[i].match(distractSTARpattern).length)
        let currentPlanetDistractFromASCII
        if(input[i].match(distractSTARpattern)) {
           currentPlanetDistractFromASCII =  input[i].match(distractSTARpattern).length
        }
        else{
            currentPlanetDistractFromASCII = 0
        }
        let newPlanetCode = ''
        for (let character of input[i]) {

            let newChar = character.charCodeAt() - currentPlanetDistractFromASCII
            newChar = String.fromCharCode(newChar)
            newPlanetCode += newChar
        }
        //console.log(newPlanetCode)
        let match = correctPlanetPattern.exec(newPlanetCode)
        //console.log(match)
        if (match) {
            let {planetName, planetPopulation, planetType, planetSoldiers} = match.groups
            if(planetType === "A"){
                attackedPlanets.push(planetName)
            }
            if(planetType === "D"){
               destroyedPlanets.push(planetName)
            
            }
                

        }
    }
    attackedPlanets.sort((name1,name2) =>{
        return name1.localeCompare(name2)
    })
     destroyedPlanets.sort((name1,name2) =>{
        return name1.localeCompare(name2)
    })
    
   console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.forEach(a => console.log(`-> ${a}`))
   
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.forEach(a => console.log(`-> ${a}`))
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
    
]
)
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
    )