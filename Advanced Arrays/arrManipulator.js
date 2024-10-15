

function manipulator(arr, comands) {

function shifter(arr,position)
{   for(let i = 1; i <= position;i++)
    {let firstElement = arr.shift()
        arr.push(firstElement)

    }
    return arr
}

function inserter(mainArr, index, insertedArr) {
    for (let i = insertedArr.length - 1; i >= 0; i--) {
        mainArr.splice(index, 0, Number(insertedArr[i]))
    }
    return mainArr
}
function sumPairs(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i += 2) {
        if (arr.length % 2 === 1 && i === arr.length - 1) {
            newArr.push(Number(arr[i]))
            break;
        }
        newArr.push(Number(arr[i]) + Number(arr[i + 1]))

    }
    return newArr
}













    for (let elements of comands) {
        elements = elements.split(' ')
        let currentCom = elements.shift()
        if (currentCom === 'add') {
            let indexAddedElements = +elements[0]
            let addedElement = + elements[1]
            arr.splice(indexAddedElements, 0, addedElement)
        }
        if (currentCom === 'addMany') {
            let indexAddedElements = +elements[0]
            let addedElements = elements.slice(1).map(x => + x)
            arr = inserter(arr, indexAddedElements, addedElements)
        }
        if (currentCom === 'contains') {
            let searchedNumber = + elements[0]
            console.log(arr.indexOf(searchedNumber))
        }
        if (currentCom === 'remove') {
            let index = +elements[0]
            arr.splice(index, 1)
        }
        if (currentCom === 'shift') {
            let position = + elements[0]
            
            arr = shifter(arr,position)
        }
        if (currentCom === 'sumPairs') {
            arr = sumPairs(arr)
        }
        if (currentCom === 'print') {
            console.log(`[ ${arr.join(', ')} ]`)
            break;
        }
    }

}
manipulator([1, 2, 4, 5, 6, 7],
    ['shift 4','print']
)

