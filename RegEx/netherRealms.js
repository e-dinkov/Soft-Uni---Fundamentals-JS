function realmNethers(input) {
    let splittingPattern = /\s*,\s*/
    let demonsLine = input.split(splittingPattern)
    //console.log(demons)
    let numbersPattern = /[-+]?[0-9]+\.?[0-9]*/g
    let multipliersDividersPattern = /[*\/]/g
    let asciiHealth = /[^*\.0-9+\-\/]/g
    demonsLine.sort((line1,line2)=>{
        return line1.localeCompare(line2)
    })

    for (let line of demonsLine) {
        let health = 0
        let sumOfNumbers = 0
        let matchHealth = line.match(asciiHealth)
        //console.log(match)
        if (matchHealth) {
            for (let character of matchHealth) {
                health += character.charCodeAt()
            }
        }

        let matchNumbers = line.match(numbersPattern)
        if (matchNumbers) {
            for (let number of matchNumbers) {
                sumOfNumbers += Number(number)
            }
        }

        // console.log(sumOfNumbers)
        let matchMultiDiv = line.match(multipliersDividersPattern)
        if (matchMultiDiv) {
            for (let sighn of matchMultiDiv) {
                if (sighn === "*") {
                    sumOfNumbers = sumOfNumbers * 2
                }
                else {
                    sumOfNumbers = sumOfNumbers / 2
                }
            }
        }
        console.log(`${line} - ${health} health, ${sumOfNumbers.toFixed(2)} damage`)
        


    }
    
}
realmNethers("M3ph-0.5s-0.5t0.0**")
realmNethers("M3ph1st0**, Azazel")