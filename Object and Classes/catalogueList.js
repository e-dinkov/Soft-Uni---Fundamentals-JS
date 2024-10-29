function catalogue(arr) {
    let products = []
    for (let elements of arr) {
        let [name, price] = elements.split(' : ')
        price = Number(price)
        let product = {
            name: name,
            price: price
        }
        products.push(product)
    }
    products.sort((a, b) => a.name.localeCompare(b.name))
    //console.log(products)
    let firstLetter = ((products[0]).name)[0]
    console.log(firstLetter.toUpperCase())
    for (let elements of products) {
        let currentLetter = (elements.name)[0]
        if (currentLetter.toUpperCase() !== firstLetter.toUpperCase()) {
            console.log(currentLetter.toUpperCase())
            firstLetter = currentLetter.toUpperCase()
        }
        console.log(`${elements.name}: ${elements.price}`)

    }


}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)