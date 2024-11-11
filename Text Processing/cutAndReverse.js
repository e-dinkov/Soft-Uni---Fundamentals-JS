function cutAndReverse(text){
    let firstHalf = text.substring(0,text.length/2)
    let secondhalf = text.substring(text.length/2)
    firstHalf = firstHalf.split('').reverse().join("")
    secondhalf = secondhalf.split('').reverse().join("")
    console.log(firstHalf)
    console.log(secondhalf)

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')