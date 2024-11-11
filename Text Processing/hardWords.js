function apparantlyHardWords([GivenText,words]){
    let text = GivenText.split(" ")
    for(let element of text){
        if(element.includes("_")){
            let correctedElement = ''
            for(let char of element){
                if(char === "_"){
                  correctedElement += "_"
                }
                else{
                    break;
                }

            }
            let searchedLength = correctedElement.length
           for(let searchedWord of words){
            if(searchedLength == searchedWord.length)
            {
                if(element.length === correctedElement.length){
                text[text.indexOf(element)] = searchedWord
                }
                else{
                    text[text.indexOf(element)] = searchedWord +   element.slice( element.length -1)
                }
                break;
            }
           }
        }
    }
    console.log(text.join(" "))


}
apparantlyHardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
    )