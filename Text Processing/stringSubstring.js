function StringSubstring (word,sentence){
     sentence = sentence.toLowerCase().split(" ")
    if(sentence.includes(word.toLowerCase())){
        console.log(word)
    }
    else{
        console.log(`${word} not found!`)
    }
}
StringSubstring('python',
'JavaScript is the best programming language'

)