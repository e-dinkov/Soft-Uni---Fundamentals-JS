function fundamentals(arr) {
    let originalSum = 0;
    let newSum = 0;
    let modArr =[];
  
  for(let i = 0; i <= arr.length - 1; i++)
  {
    let currentElement = arr[i]
    originalSum += currentElement;
    if(currentElement % 2 === 0)
    {
      currentElement += i;
    }
    else{
      currentElement -= i;
    }
    newSum += currentElement
    modArr.push(currentElement);
  
  
  }
  console.log(modArr)
  console.log(originalSum)
  console.log(newSum)
  
  }
  
  fundamentals([5, 15, 23, 56, 35])