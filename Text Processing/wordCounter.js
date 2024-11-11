function wordCounter(sentence, searchedWord){
    let sentenceArr= sentence.split(' ')
    let counter  = 0 ;
    for(const element of sentenceArr){
        if (element == searchedWord)
        {
            counter++
        }
    }
    console.log(counter)

}
wordCounter('This is a word and it also is a sentence',
'is'
)