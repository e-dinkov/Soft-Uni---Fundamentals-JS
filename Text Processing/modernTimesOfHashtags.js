function hastags(sentence){
sentence = sentence.split(' ')
for(let word of sentence){
    if(word.length > 1 && word.includes("#")){
        let pattern = /^[A-Za-z]+$/
        if(pattern.test(word.slice(1))){
              console.log(word.slice(1))
            }
      
    }
}
}
hastags('Nowadays everyone uses # to tag a #special word in #socialMedia')