function softUniBarIncome(input){
let pattern = /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^$%|.]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>\d+\.?\d+)\$/
let totalIncome = 0
for(let element of input){
    let match = element.match(pattern)
    if(match){
        let {name, product, count, price} = match.groups
        
     console.log(`${name}: ${product} - ${(Number(count)*Number(price)).toFixed(2)}`)
     totalIncome += Number(count)*Number(price)
    }
}
console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
    )