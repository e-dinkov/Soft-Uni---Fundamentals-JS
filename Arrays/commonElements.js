function fundamentals(arr1,arr2) {
    for( let i =0 ; i <= arr1.length; i ++)
    {
        if(arr2.includes(arr1[i]) === true) console.log(arr1[i])
    }


  
  }

  fundamentals(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
    )