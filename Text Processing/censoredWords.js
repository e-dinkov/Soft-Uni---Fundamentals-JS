function censoredWords(sentence, searchedWord)
{
    let repeatedText = "*".repeat(searchedWord.length)
sentence = sentence.replaceAll(searchedWord,repeatedText)
console.log(sentence)

}
censoredWords('A small sentence with some words', 'small')