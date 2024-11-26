function needForSpeed(input){
    let numberOfCars = Number(input.shift())
    let cars = {}
    for(let i = 0 ; i < numberOfCars; i++)
    {   
        let [carName, mileage, fuel] = input[i].split("|")
       carName=  carName.trim()
        cars[carName] = {}
        cars[carName]["mileage"] = Number(mileage)
        cars[carName]["fuel"] = Number(fuel)
    }
    //console.log(cars)
    input.splice(0,numberOfCars)
    for(let command of input){
        if(command.includes("Drive")){
            let [uselessCommand, carName, distance, fuel] = command.split(' : ')
            distance = + distance
            fuel = + fuel
            if(cars[carName]["fuel"] < fuel){
                console.log("Not enough fuel to make that ride")
                continue
            }
            cars[carName]["fuel"] -= fuel
            cars[carName]["mileage"] += distance
            console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            if(cars[carName]["mileage"] >= 100000){
                console.log(`Time to sell the ${carName}!`)
                delete cars[carName]

            }

        }
        if(command.includes("Refuel")){
            let [uselessCommand, carName, fuel] = command.split(' : ')
            fuel = + fuel
            let previousFuel = cars[carName]["fuel"]
            cars[carName]["fuel"] += fuel
            if(cars[carName]["fuel"] > 75){
                cars[carName]["fuel"] = 75
            }
            console.log(`${carName} refueled with ${cars[carName]["fuel"] - previousFuel} liters`)

        }
        if(command.includes("Revert")){
            let [uselessCommand, carName, distance] = command.split(' : ')
            distance = + distance
            cars[carName]["mileage"] -= distance
            if(cars[carName]["mileage"] >= 10000){
                console.log(`${carName} mileage decreased by ${distance} kilometers`)
            }
            else{
                cars[carName]["mileage"] = 10000
            }
        }
    }
    for(let currentCar in cars){
        console.log(`${currentCar} -> Mileage: ${cars[currentCar]["mileage"]} kms, Fuel in the tank: ${cars[currentCar]["fuel"]} lt.`)
    }
    


}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )