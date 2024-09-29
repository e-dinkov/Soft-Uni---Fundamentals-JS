function fundamentals(input) {
    let rooms = [];
    rooms = input.split('|')
    let health = 100;
    let passedRooms = 0;
    let totalCoins = 0;
    for (let i = 0; i < rooms.length; i++) {
        let roomParts = rooms[i].split(' ')
        let item = roomParts[0];
        let points = +roomParts[1];
        switch (item) {
            case 'potion':
                let healthAdded;

                if (health + points >= 100) {
                     healthAdded = 100 - health;
                    health = 100

                }
                else {
                    health += points;
                    healthAdded = points;
                }

                console.log(`You healed for ${healthAdded} hp.`)
                console.log(`Current health: ${health} hp.`)
                passedRooms++;
                break;
            case 'chest':
                console.log(`You found ${points} coins.`)
                totalCoins += points;
                passedRooms ++;
                break;
                 default:
                    passedRooms ++;
                    health -= points;
                    if(health <= 0)
                    {
                        console.log(`You died! Killed by ${item}.`)
                        console.log(`Best room: ${passedRooms}`)
                        return ;
                    }
                    console.log(`You slayed ${item}.`)
                    break;

        }

    }
    console.log(`You've made it!`)
    console.log(`Coins: ${totalCoins}`)
    console.log(`Health: ${health}`)

}
fundamentals("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")