function timeTravel(input){
    let travelDest = {}
    for(let element of input){
        let [country, city, price] = element.split(' > ')
        price = Number(price)
        if(country in travelDest){
            if(city in travelDest[country]){
                if(travelDest[country][city] > price)
                {
                    travelDest[country][city] = price
                }

            }
            else{
                travelDest[country][city] = price
            }
            
        }
        else{ 
            travelDest[country] = {}
            travelDest[country][city] = price
            
        }
    }
   let  travelDestEntries = Object.entries(travelDest).sort((a,b) =>{
       return a[0].localeCompare(b[0])
    })
    for(let [country, cityOBJ] of travelDestEntries){
      
      let sortedCityOBJ = Object.entries(cityOBJ).sort((a,b) => {
        return a[1] - b[1]
      })
      let printedCityOBJ = ''
      for(let [city,price] of sortedCityOBJ){
       printedCityOBJ += `${city} -> ${price} `
      }
      
      console.log(`${country} -> ${printedCityOBJ} `)
      
    }
 //console.log(travelDest)

}
timeTravel([
    "Bulgaria > Sofia > 500",
    
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800"

    ]
    )