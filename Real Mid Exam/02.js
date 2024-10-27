function archeryChampion(input) {
    
    let targets = input[0].split("|").map(Number);
    let points = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        
        if (command === "Game over") {
            break;
        }

       
        if (command === "Reverse") {
            targets.reverse();
            continue;
        }

       
        command = command.split('@')
        let action = command[0]
        let startIndex = command[1]
        let length = command [2]
        //let [action, startIndex, length] = command;
        startIndex = +startIndex;
        length = +length;

       
        if (startIndex < 0 || startIndex >= targets.length) {
            continue;
        }

        
        let targetIndex;
        if (action === "Shoot Left") {
            targetIndex = (startIndex - length % targets.length + targets.length) % targets.length;
        } else if (action === "Shoot Right") {
            targetIndex = (startIndex + length) % targets.length;
        } else {
            continue;
        }

        
        if (targets[targetIndex] >= 5) {
            points += 5;
            targets[targetIndex] -= 5;
        } else {
            points += targets[targetIndex];
            targets[targetIndex] = 0;
        }
    }

   
    console.log(targets.join(" - "));
    console.log(`John finished the archery tournament with ${points} points!`);
}


archeryChampion([
    "10|20|30|40|50",
    "Shoot Left@0@2",
    "Shoot Right@4@3",
    "Shoot Left@1@10",
    "Shoot Right@3@8",
    "Reverse",
    "Game over"
])
