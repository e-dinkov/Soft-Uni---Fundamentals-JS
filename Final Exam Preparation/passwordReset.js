function passwordReset(input) {
    function replaceThings(text,replacedElement,substitude){
        let tempText = text
        while(tempText.includes(replacedElement)){
           tempText =  tempText.replace(replacedElement,substitude)
            
        }
        return tempText
    }

    let givenString = input.shift()
    for (let command of input) {
        if (command === "TakeOdd") {
            let newString = ''
            for (let i = 1; i < givenString.length; i += 2) {
                newString += givenString[i]
            }
            givenString = newString
            console.log(givenString)
        }
        if (command.includes("Cut")) {
            let [uselessCommand, indexOfCuutting, lengthOfCutting] = command.split(' ')
            let removedString = givenString.substring(Number(indexOfCuutting), Number(indexOfCuutting) + Number(lengthOfCutting))
            let firstPart = givenString.slice(0, Number(indexOfCuutting))
            let secondPart = givenString.slice(Number(indexOfCuutting) + Number(lengthOfCutting))
            givenString = firstPart.concat(secondPart)
            console.log(givenString)
            //givenString = givenString.replace(removedString, "")
        }
        if (command.includes("Substitute")) {
            let [uselessCommand, replacedString, substituteString] = command.split(" ")
            if (givenString.includes(replacedString)=== false) {
                console.log("Nothing to replace!")
            }
            else {
                givenString = replaceThings(givenString, replacedString, substituteString)
                console.log(givenString)
            }


        }
    }
    console.log(`Your password is: ${givenString}`)

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)