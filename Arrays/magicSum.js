function fundamentals(arr,sum) {
    for(let i =0 ; i < arr.length; i++)
    {let firstElement = arr[i];
        for(let j = i + 1; j < arr.length; j++)
        {
            let secondElement = arr[j];
            if(secondElement + firstElement === sum)
            {
                console.log(`${firstElement} ${secondElement}`)
                
            }
        }

    }




}
fundamentals([1, 2, 3, 4, 5, 6],6)