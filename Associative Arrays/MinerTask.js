function miningInfo(input){
let materials = {}
for(let i = 0; i < input.length; i+=2){
    let material = input[i]
    let quantity = input[i+1]
    if(material in materials === false){
        materials[material] = Number(quantity)
    }
    else{
        materials[material] += Number(quantity)
    }
}let outputArr = Object.entries(materials)
for(let  [material, quantity] of outputArr){
    console.log(`${material} -> ${quantity}`)

}
}
miningInfo([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )