function fundamentals(number1,number2) {

    let sum = 0;
    let line = ""
    
    for(number1; number1 <= number2;number1++)
    {
    line += number1 + " ";
    sum += number1
    }
      
    
    console.log(line)
    console.log(`Sum: ${sum}`)
    
    
    
    }