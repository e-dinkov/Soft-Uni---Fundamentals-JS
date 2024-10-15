function gladiator(arr) {
    let inventory = arr.
        shift().
        split(' ')
    for (let elements of arr) {
        let command = elements.
            split(' ').
            shift()
        let item = elements.split(' ').pop()
        if (command === 'Buy') {
            if (inventory.includes(item) == false) {
                inventory.push(item)
            }
        }
        if (command === 'Trash') {
            if (inventory.includes(item) == true) {
                inventory.splice(inventory.indexOf(item), 1)
            }
        }
        if (command === 'Repair') {
            if (inventory.includes(item) == true) {
                inventory.push(item)
                inventory.splice(inventory.indexOf(item), 1)
            }
        }
        if (command === 'Upgrade') {
            let itemParts = item.split('-')
            if (inventory.includes(itemParts[0]) == true) {

                item = itemParts[0] + ':' + itemParts[1];
                inventory.splice(inventory.indexOf(itemParts[0]) + 1, 0, item)
            }
        }
    }
    console.log(inventory.join(' '))
}
gladiator(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)
gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']

)
