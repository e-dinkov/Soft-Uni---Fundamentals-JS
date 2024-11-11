function oddOccurences(arr
   
) {  arr = arr.split(' ')
    let wordList = new Map()
    for (let element of arr)
    {   element = element.toLowerCase()
        if(!wordList.has(element)){
            wordList.set(element,0)
        }
        wordList.set(element,wordList.get(element)+1)
    } let outputString = '';
        for(let [word,appearances] of wordList){
            if(appearances % 2 === 1 ){
                outputString += word + ' '
            }
        }
        console.log(outputString)
    }
    oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')