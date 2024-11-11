function passwordGenerator([string1, string2, word]){
    let modifiedStr1 = ''
    let modifiedStr2= ''
    let generatedPassword = ''
    let wordIndex = 0
        for(let letterOfString1 of string1){
            if(letterOfString1 === 'a' || letterOfString1 === 'e' ||letterOfString1 === 'o' ||letterOfString1 === 'u' || letterOfString1 === 'i'  ){
                modifiedStr1 += word[wordIndex].toUpperCase()
                wordIndex++
                if(wordIndex > word.length - 1){
                    wordIndex = 0
                }
            }
            else {
                modifiedStr1 += letterOfString1
            }

        }
        
        for(let letterOfString2 of string2){
            if(letterOfString2 === 'a' || letterOfString2 === 'e' ||letterOfString2 === 'o' ||letterOfString2 === 'u' || letterOfString2=== 'i'  ){
                modifiedStr2 += word[wordIndex].toUpperCase()
                wordIndex++
                if(wordIndex > word.length - 1){
                    wordIndex = 0
                }
            }
            else {
                modifiedStr2 += letterOfString2
            }

        }
        generatedPassword = modifiedStr1.concat(modifiedStr2)
        console.log(`Your generated password is ${generatedPassword.split('').reverse().join('')}`)

}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )