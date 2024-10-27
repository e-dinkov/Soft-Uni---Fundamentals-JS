function toObject(jsonText)
{
let objectFromJson = JSON.parse(jsonText)

for(const key in objectFromJson)
{
    let value = objectFromJson[key]
    console.log(`${key}: ${value}`)
}
}
toObject('{"name": "George", "age": 40, "town": "Sofia"}')