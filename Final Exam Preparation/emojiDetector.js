function emojiDetector(input){
    let string = input.shift()
    let digitPattern = /[0-9]/g
    let emojiPattern = /([*:]{1})\1(?<emojiName>[A-Z]{1}[a-z]{2,})\1\1/g
    let matchDigit = string.match(digitPattern)
    let coolEmojis = []
    let product = 1
    for(const digit of matchDigit){
          product = product * Number(digit)
          if(product == 0 ){
            break;
          }
    }
    console.log(`Cool threshold: ${product}`)
    let matchEmojis = string.match(emojiPattern)
    console.log(`${matchEmojis.length} emojis found in the text. The cool ones are:`)
    for(let currentMatch of matchEmojis){
        let ASCIIsum = 0
        let editedCurrentMatch = currentMatch.slice(2,currentMatch.length-2)
        for(let i = 0 ; i < editedCurrentMatch.length; i++){
           ASCIIsum +=  editedCurrentMatch[i].charCodeAt()

        }
        if(ASCIIsum > product){
            console.log(currentMatch)
        }

        
    }

   

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])