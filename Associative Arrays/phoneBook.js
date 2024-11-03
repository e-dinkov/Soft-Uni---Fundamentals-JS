function phoneBookPrinter (arr)
{
let phoneBook = {};
for (let elements of arr)
{
    let [name , number] = elements.split(" ")
    phoneBook[name] = number
    
}
for(const name in phoneBook)
{  let phoneNumber = phoneBook[name]
    console.log(`${name} -> ${phoneNumber}`)
}
}
phoneBookPrinter(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )