function revealWords(words, sentence){
    words = words.split(", ")
    for(let currentWord of words){
        let replacedWords = "*".repeat(currentWord.length)
        sentence = sentence.replace(replacedWords,currentWord)
    }
    console.log(sentence)

}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)