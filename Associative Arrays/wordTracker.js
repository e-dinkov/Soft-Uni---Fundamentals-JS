function wordTracker(arr)
{
let searchedWords = new Map()
let firstSentence = arr.shift().split(' ')
for(const word of firstSentence){

    searchedWords.set(word,0)
}
for(const word of arr)
{
    if(searchedWords.has(word)){
        searchedWords.set(word,searchedWords.get(word)+1)
    }
}
let sortedOutput = Array.from(searchedWords.entries())
                    .sort(([ka,va],[kb,vb])=>{
 return vb-va
})
for(let [key,value] of sortedOutput){
    console.log(`${key} - ${value}`)
}

}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
     'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]	
    )