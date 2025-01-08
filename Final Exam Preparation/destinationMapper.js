function destinationMapper(string){
let patternDestination = /([\/\=])(?<destination>[A-Z][A-Za-z]{2,})\1/g
let matches = Array.from(string.matchAll(patternDestination))
let travelPoints = 0
let destinationsOutput = []
for(let currentElement of matches){
let destination = currentElement.groups
destination = destination["destination"]
destinationsOutput.push(destination)
travelPoints += destination.length

}
console.log(`Destinations: ${destinationsOutput.join(', ')}`)
console.log(`Travel Points: ${travelPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")	
