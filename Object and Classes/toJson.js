function toJson(name, lastName, hairColor)
{
let person = {

    name : name,
    lastName : lastName,
    hairColor : hairColor

}
let objToJsn = JSON.stringify(person)
console.log(objToJsn)
}
toJson('George', 'Jones', 'Brown')