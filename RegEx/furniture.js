function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/
    let furnitures = {}
    let totalCost = 0
    console.log(`Bought furniture:`)
    for (let element of input) {

        let match = pattern.exec(element)
        if (match) {
            let { name, price, quantity } = match.groups
            price = + price
            quantity = + quantity
            console.log(name)
            totalCost += price * quantity


        }




    }



    console.log(`Total money spend: ${totalCost.toFixed(2)}`)
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)