function coffeeLover(arr) {
    let coffeeList = arr.shift().split(' ')
    let n = +arr.shift()
    for (let i = 0; i < n; i++) {
        let elementParts = arr[i].split(' ')
        let command = elementParts.shift()
        if (command === 'Include') {
            coffeeList.push(elementParts)
        }
        if (command === 'Remove') {
            let direction = elementParts.shift()
            let remNumbers = +elementParts
            if (remNumbers > coffeeList.length) {
                continue
            }
            if (direction == 'last') {
                coffeeList.splice(-1, remNumbers)
            }
            if (direction == 'first') {
                coffeeList.splice(0, remNumbers)
            }


        }
        if (command === 'Prefer') {
            let index1 = +(elementParts.shift())
            let index2 = +(elementParts.shift())
            if(index1 < coffeeList . length && index1 >= 0 && index2 < coffeeList . length && index2 >= 0 )
            {
                let swap = coffeeList[index1]
                
                coffeeList[index1] = coffeeList[index2]
                coffeeList[index2] = swap
            }

    }
    if(command === 'Reverse')
    {
        let reverseCoffee = coffeeList.reverse()
        coffeeList = reverseCoffee
    }



    }
    console.log(`Coffees:\n${coffeeList.join(' ')}`)
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "6",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse",'Include Sex'])
    coffeeLover((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
        "5",
        "Include OrdinaryCoffee",
        "Remove first 1",
        "Prefer 0 1",
        "Prefer 3 1",
        "Reverse"])
        )
