function fundamentals(input) {
    let fieldSize = input[0];  // The size of the field
    let initialIndexesString = input[1];  // Initial ladybug positions as a string
    let commands = input.slice(2);  // All commands for ladybugs
    let initialIndexes = [];
    let indexParts = initialIndexesString.split(' ')
    for (let i = 0; i < indexParts.length; i++) {
        initialIndexes.push(+indexParts[i])
    }
    let field = new Array(fieldSize).fill(0);
    for (let i = 0; i < initialIndexes.length; i++) {
        if (initialIndexes[i] < 0 || initialIndexes[i] >= fieldSize) {
            continue
        }
        field[initialIndexes[i]] = 1

    }
    //execute commands
    for (let i = 0; i < commands.length; i++) {
        let commandParts = commands[i].split(" ");
        let ladyIndex = +commandParts[0]
        let direction = commandParts[1];
        let flyDistance = +commandParts[2];
        let flySpot;
        if (ladyIndex < 0 || ladyIndex >= fieldSize || field[ladyIndex] === 0) {
            continue
        } field[ladyIndex] = 0;
        if (direction === "right") {
            flySpot = ladyIndex + flyDistance;
        }
        if (direction === 'left') {
            flySpot = ladyIndex - flyDistance;
        }

        while (true) {
            if (flySpot < 0 || flySpot >= fieldSize) { break; }
            if(field[flySpot] === 0)
            {
                field[flySpot] = 1;
                break;
            }
            switch (direction)
            {
                case "right":
                    flySpot += flyDistance
                    break;
                    case "left":
                        flySpot -= flyDistance
                        break;
            }

        }
    }
    console.log(field.join(" "))




}

fundamentals([3, '0 1',
    '0 right 1',
    '2 right 1'])