function shoppingList(arr) {
    let list = arr.shift().split('!')
    for (let elements of arr) {
        let elementParts = elements.split(' ')
        let command = elementParts.shift()
        let item = elementParts.shift()
        switch (command) {
            case 'Unnecessary':
                {
                    if (list.includes(item) === true) {
                        list.splice(list.indexOf(item), 1)
                    }
                    break;
                }
            case 'Urgent':
                {
                    if (list.includes(item) === false) {
                        list.splice(0, 0, item)
                    }
                    break;
                }
            case 'Rearrange':
                {
                    if (list.includes(item) === true) {
                        list.splice(list.indexOf(item), 1)
                        list.push(item)
                    }
                    break;
                }
            case 'Correct':
                {
                    if (list.includes(item) === true) {
                        let indexOfItem = list.indexOf(item);
                        let secondItem = elementParts.shift()
                        list.splice(list.indexOf(item), 1, secondItem)



                    }
                    break;
                }
        }
    }
    console.log(list.join(', '))
}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)

shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)