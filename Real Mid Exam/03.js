function groceryShopping(arr) {

    let products = arr.shift().split('|')
    for (let elements of arr) {
        if (elements === 'Shop!') {
            break;
        }
        elements = elements.split('%')
        let command = elements[0]
        if (command === "Important") {
            let product1 = elements[1]
            if (products.includes(product1) === false) {
                products.splice(0, 0, product1)
                continue
            }
            else {
                
                products.splice(products.indexOf(product1),1)
                products.splice(0, 0, product1)
            }
        }
        if(command === "Add")
        {
            let product1 = elements[1]
            if (products.includes(product1) === true)
            { 
                console.log("The product is already in the list.")
                continue
            }
            else
            {
                products.push(product1)
            }
        }
        if(command === 'Swap')
        {
            let product1 = elements[1]
            let product2 = elements[2]
            if(products.includes(product1) === false)
            {
                console.log(`Product ${product1} missing!`)
                continue
            }
            if(products.includes(product2) === false)
            {
                console.log(`Product ${product2} missing!`)
                continue
            }
            let product1Index = products.indexOf(product1)
            let product2Index = products.indexOf(product2)
            let a = products[product2Index]
            products[product2Index] = products[product1Index]
            products[product1Index] = a
            
        }
        if(command === 'Remove')
        { let product1 = elements[1]
            if(products.includes(product1) === false)
            {
                console.log(`Product ${product1} isn't in the list.`)
                continue
            }
            else{
                products.splice(products.indexOf(product1),1)
            }
        }
        if(command === 'Reversed')
        {
            products.reverse()
        }


    }
    for(let  i = 0; i < products.length; i++)
    {

        console.log(`${i+1}. ${products[i]}`)
    }
}
groceryShopping(["kiwi|paper|coffee",
    "Add%coffee",
    "Important%bread",
    "Shop!"])
    
    
