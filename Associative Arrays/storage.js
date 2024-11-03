function orderedStorage(arr)
{
let productStorage = new Map()
for(const elements of arr){
    let [product, quantity] = elements.split(' ')
    quantity = Number(quantity)
    if(productStorage.has(product))
    {
        quantity += productStorage.get(product)
      productStorage.set(product,quantity)
      continue
  }

productStorage.set(product,quantity)

}
let mapKeys = productStorage.keys()
for(const key of mapKeys){
    console.log(`${key} -> ${productStorage.get(key)}`)
}
}
orderedStorage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    )