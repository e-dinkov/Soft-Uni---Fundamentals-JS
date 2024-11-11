function findingValueOfEachPlayer(input) {
    let playersDecks = new Map()
    for (let element of input) {
        let [name, ...cards] = element.split(': ')
        cards = cards.toString()
        let cardArray = cards.split(', ')



        if (!playersDecks.has(name)) {
            playersDecks.set(name, [])
        } let editedValue = (Array.from(playersDecks.get(name))).concat(cardArray)
        playersDecks.set(name, editedValue)



    }
    for (let [player, cards] of playersDecks) {
        let cardsOfPlayer = new Set()
        for (let element of cards) {
            cardsOfPlayer.add(element)
        }
        //cardsOfPlayer = Array.from(cardsOfPlayer)
        //console.log(cardsOfPlayer)
        playersDecks.set(player, cardsOfPlayer)


    }
    for (let [player, cards] of playersDecks) {
        let sum = 0;
        cards.forEach(card => {
            let num
            if (Number(card[0]) < 10 && Number(card[0]) >= 2) {
                num = Number(card[0])

            }
            if (Number(card[0]) === 1) {
                num = 10
            }
            if (card[0] === 'J') {
                num = 11
            }
            if (card[0] === 'Q') {
                num = 12
            }
            if (card[0] === 'K') {
                num = 13
            }
            if (card[0] === 'A') {
                num = 14
            }
            if (card[card.length - 1] === 'S') {
                num = num * 4
            }
            if (card[card.length - 1] === 'H') {
                num = num * 3
            }
            if (card[card.length - 1] === 'D') {
                num = num * 2
            }
            if (card[card.length - 1] === 'C') {
                num = num * 1
            }
            sum += num

        })
        console.log(`${player}: ${sum}`)
    }
    //console.log(playersDecks)

}
findingValueOfEachPlayer([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)