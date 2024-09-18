function fundamentals(number, typeOfGroup, day) {
    let price = 0;
    if (typeOfGroup === "Students") {
      switch (day) {
        case "Friday":
          price = number * 8.45
          break;
        case "Saturday":
          price = number * 9.80
          break;
        case "Sunday":
          price = number * 10.46
          break;
  
  
      }
      if (number >= 30) {
        price = price * 0.85
      }
  
    }
    if (typeOfGroup === "Business") {
      if (number >= 100) {
        number -= 10;
      }
      switch (day) {
        case "Friday":
          price = number * 10.90
          break;
        case "Saturday":
          price = number * 15.60
          break;
        case "Sunday":
          price = number * 16
          break;
  
  
      }
  
  
    }
    if (typeOfGroup === "Regular") {
   
      switch (day) {
        case "Friday":
          price = number * 15
          break;
        case "Saturday":
          price = number * 20
          break;
        case "Sunday":
          price = number * 22.5
          break;
  
  
      }
         if(number >= 10 && number <= 20)
      {price = price *0.95
  
      }
    
  
    }
    console.log(`Total price: ${price.toFixed(2)}`)
  
  
  
  
  
  }