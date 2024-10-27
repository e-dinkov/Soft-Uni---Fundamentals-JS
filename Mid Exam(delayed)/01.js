function biscuitFactory(arr)
{
    let biscuitsPerDay = +arr[0]
    let workers = + arr[1]
    let rivalFactory = + arr[2]
    let factoryProduction = 0;
    for (let day = 1; day <= 30; day++) {
        if (day % 3 === 0) {
            
            factoryProduction += Math.floor((biscuitsPerDay * workers) * 0.75);
        } else {
            
            factoryProduction += biscuitsPerDay * workers;
        }
    }
let percentage = ((factoryProduction - rivalFactory)/rivalFactory )* 100
console.log(`You have produced ${factoryProduction} biscuits for the past month.`)
if(percentage > 0)
{
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
}
if(percentage < 0)
{
    console.log(`You produce ${ (-percentage).toFixed(2)} percent less biscuits.`)
}
}
biscuitFactory((["78",
    "8",
    "16000"])
    
    )
   