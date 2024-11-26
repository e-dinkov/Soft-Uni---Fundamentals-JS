function worldTour(input) {
    let destinationsString = input.shift()
   

    for (let command of input) {
        if (command.includes("Add")) {
            let [uselessCommand, index, addedStop] = command.split(":")
            if (index >= 0 && index < destinationsString.length) {
                index = + index
                let firtsPart = destinationsString.slice(0, index)
                let secondPart = destinationsString.slice(index)
                destinationsString = firtsPart.concat(addedStop.concat(secondPart))
                
            }
            console.log(destinationsString)


        }
        if (command.includes("Remove")) {
            let [uselessCommand, starIndex, endIndex] = command.split(":")
            if(starIndex >= 0 && starIndex < destinationsString.length && endIndex >= 0 && endIndex < destinationsString.length){
                let firtsPart = destinationsString.slice(0, starIndex)
                let secondPart = destinationsString.slice(Number(endIndex) + 1)
                destinationsString = firtsPart.concat(secondPart)
                
            }
            console.log(destinationsString)


        }
        if (command.includes("Switch")) {
            let [uselessCommand, removedString, switchString] = command.split(":")
            if(destinationsString.includes(removedString)){
                
                
                let removePosition = destinationsString.indexOf(removedString)
                let firtsPart = destinationsString.substring(0, removePosition)
                let secondPart = destinationsString.substring(removedString.length + removePosition )
                destinationsString = firtsPart.concat(switchString.concat(secondPart))
                

            }
            console.log(destinationsString)

        }
    }
    console.log(`Ready for world tour! Planned stops: ${destinationsString}`)
    
}
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
'Remove Stop:4:8',
'Switch:Albania: Azərbaycan',
"Travel"])
)