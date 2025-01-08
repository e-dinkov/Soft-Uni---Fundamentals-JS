function thePianist(input) {
    let pieces = {}
    let n = Number(input.shift())

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input[i].split("|")
        pieces[name] = {}
        pieces[name]['composer'] = composer
        pieces[name]['key'] = key
    }
    for (let i = n; i < input.length; i++) {
        if (input[i].includes("Add")) {
            let [command, name, composer, key] = input[i].split("|")
            if (name in pieces == true) {
                console.log(`${name} is already in the collection!`)
            }
            else {
                pieces[name] = {}
                pieces[name]['composer'] = composer
                pieces[name]['key'] = key
                console.log(`${name} by ${composer} in ${key} added to the collection!`)
            }
        }
        if (input[i].includes("Remove")) {
            let[command,name] = input[i].split("|")
            if (name in pieces === false) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
            else{
                delete pieces[name]
                console.log(`Successfully removed ${name}!`)
            }

        }
        if (input[i].includes("ChangeKey")) {
            let [command, name, newKey] = input[i].split("|")
            if (name in pieces === false) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
            else{
                pieces[name]["key"] = newKey
                console.log(`Changed the key of ${name} to ${newKey}!`)
            }

        }
    }
    for(let name in pieces){
        console.log(`${name} -> Composer: ${pieces[name]["composer"]}, Key: ${pieces[name]["key"]}`)
        
    }

   // console.log(pieces)
}
//'Add|Fur Elise|Beethoven|C# Minor',
// 'Remove|Clair de Lune',
//'ChangeKey|Moonlight Sonata|C# Major',

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)