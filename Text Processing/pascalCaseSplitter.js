function PascalSplitter(input) {
    let prevUpperSymbolIndex = 0
    let wordsOutput = ''
    for (let i = 1; i < input.length; i++) {
        if (input[i].charCodeAt(0) < 97) {
            wordsOutput += input.substring(prevUpperSymbolIndex, i)
            wordsOutput += ', '

            prevUpperSymbolIndex = i
        }

    }
    wordsOutput += input.substring(prevUpperSymbolIndex, input.length)
    console.log(wordsOutput)

}
PascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')