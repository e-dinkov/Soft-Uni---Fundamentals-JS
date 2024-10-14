function manipulation(arr) {
    let numbers = []
    numbers = arr
        .shift()
        .split(' ')
        .map(number => + number)

    for (element of arr) {
        let parts = element.split(' ')
        let command = parts.shift()
        switch (command) {
            case 'Add':
                let addNum = Number(parts.shift())
                numbers.push(addNum)
                break;
            case 'Remove':
                let RemNumber = Number(parts.shift())
                let index = numbers.indexOf(RemNumber)
                while (index !== -1) {
                    numbers.splice(index, 1)
                    index = numbers.indexOf(RemNumber)
                }
                /* for(let i = 0; i < numbers.length; i++)
                 {
                     if(numbers[i] === RemNumber){numbers.splice(i,1)}
                 }
            */
                break;
            case 'RemoveAt':
                let removeIndex = Number(parts.shift())
                numbers.splice(removeIndex, 1)
                break;
            case 'Insert':
                let insertedNum = Number(parts.shift())
                let insertedIndex = Number(parts.shift())
                numbers.splice(insertedIndex, 0, insertedNum)
                break;
        }



    }
    console.log(numbers.join(' '))
}
manipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)