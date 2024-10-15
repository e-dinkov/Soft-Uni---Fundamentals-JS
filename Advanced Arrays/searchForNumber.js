function search(numbers, manipulations)
{
    let modArr = numbers.slice(0,manipulations[0])
        modArr.splice(0,manipulations[1])
        let elementIndex = modArr.indexOf(manipulations[2])
        let counter = 0 
      
    while(elementIndex !== -1)
        {  counter ++
         modArr.splice(elementIndex,1)
         elementIndex = modArr.indexOf(manipulations[2])
        }
        console.log(`Number ${manipulations[2]} occurs ${counter} times.`)
}
search([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )