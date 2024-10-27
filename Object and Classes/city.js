function city(cityObj)
{
let cityKeys = Object.keys(cityObj)
for(key of cityKeys)
{
    let cityVal = cityObj[key]
    console.log(`${key} -> ${cityVal}`)
    
}
}
let returnedObj = city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
