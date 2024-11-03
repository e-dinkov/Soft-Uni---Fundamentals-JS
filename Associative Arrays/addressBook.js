function sortingAddresses(arr)
{
    let processedAddresses = {};
for(const elements of arr)
{
    let [name, addres] = elements.split(':')
    processedAddresses[name] = addres
}
let sortedKeys = Object.keys(processedAddresses)
sortedKeys.sort((k1,k2) =>{
    return k1.localeCompare(k2)
})
for(const keys of sortedKeys)
{
    console.log(`${keys} -> ${processedAddresses[keys]}`)
}
}
sortingAddresses(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']	
    )