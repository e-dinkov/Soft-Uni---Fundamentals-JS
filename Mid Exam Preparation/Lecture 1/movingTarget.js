function movingTargets(arr) {
    let targets = arr.shift().split(' ').map(x => +x)
    for (let elements of arr) {
        let elementParts = elements.split(' ')
        let command = elementParts.shift()
        let index = Number(elementParts.shift())
        switch (command) {
            case 'Add':
                {
                    let value = Number(elementParts.shift())
                    if (index >= 0 && index < targets.length) {
                        targets.splice(index, 0, value)
                    }
                    else {
                        console.log("Invalid placement!")
                    }
                    break;
                }
            case 'Shoot':
                {
                    let power = Number(elementParts.shift())
                    if (index >= 0 && index < targets.length) {
                        targets[index] -= power
                        if (targets[index] <= 0) {
                            targets.splice(index, 1)
                        }
                    }

                    break;

                }
            case 'Strike':
                {
                    let radius = Number(elementParts.shift())
                    if (index >= radius && index < targets.length - radius) {
                        targets.splice(index - radius, radius * 2 + 1)
                    }
                    else {
                        console.log("Strike missed!")
                    }
                    break;
                }
        }
    }
    console.log(targets.join('|'))
}
movingTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
    
