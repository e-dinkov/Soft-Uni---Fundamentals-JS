function replaceRepeatingChars(input){
    let outputString = ''
    let prevSymbol = input[0]
    outputString += prevSymbol

    for(let i = 1; i < input.length; i++){
        if (input[i] === prevSymbol){
            prevSymbol = input[i]
        }
        else{
            outputString += input[i]
            prevSymbol = input[i]
        }
       
    }
    console.log(outputString)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')