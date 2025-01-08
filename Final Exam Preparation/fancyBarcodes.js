function fancyBarcodes(input){
let correctBarcodePattern = /@[#]+(?<code>[A-Z]{1}[a-zA-Z0-9]{4,}[A-Z]{1})@[#]+/
let n = Number (input.shift())
let numberPattern = /\d/g
for(let barcode of input){
    if(correctBarcodePattern.test(barcode)){
        let numberMatches = barcode.match(numberPattern)
        if(numberMatches){
            console.log(`Product group: ${numberMatches.join('')}`)
        }
        else{
            console.log(`Product group: 00`)
        }
        
    }
    else{
        console.log(`Invalid barcode`)

    }

}
}
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
    
    )