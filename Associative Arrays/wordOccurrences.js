function findWordOccurrences(arr)
{
let wordOccurrences = new Map()
for(const element of arr){

    if(wordOccurrences.has(element) === false){
        wordOccurrences.set(element,0)
        
    }
    wordOccurrences.set(element, wordOccurrences.get(element) + 1);
}
let sortedArr = Array.from(wordOccurrences).sort((a,b) => b[1] - a[1])
for(const [word,appearances] of sortedArr)
{
 console.log(`${word} -> ${appearances} times`)
}

}
findWordOccurrences(["Here", "is", "the", "first", "sentence",
     "Here", "is", "another",
     "sentence", "And", "finally", "the", "third", "sentence"])