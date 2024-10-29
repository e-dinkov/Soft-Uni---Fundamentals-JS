function sortingHeroesInfo(arr) {



    let heroes = []
    for (let currentHero of arr) {
        let [HeroName, level, items] = currentHero.split(' / ')
        level = Number(level)
        let heroObj = {
            Hero: HeroName,
            level: level,
            items: items
        }
        heroes.push(heroObj)

    }

    heroes.sort((a, b) => a.level - b.level)
    for (let elements of heroes) {
        console.log(`Hero: ${elements.Hero}\nlevel => ${elements.level}\nitems => ${elements.items}`)
    }

}
sortingHeroesInfo([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)