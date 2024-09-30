function fundamentals(arr) {
    let isFound = false;
    let index;
    for(let i = 0; i < arr.length; i++)
    { let currentElement = arr[i];
        let rightSum = 0 ;
        let leftSum = 0;
        for(let j = i - 1; j >=0; j--)
        {
            leftSum += arr[j]
        }
        for(let k = i + 1; k < arr.length; k++)
            {
                rightSum += arr[k]
            }
            if(leftSum === rightSum)
            {
                index = i;
                isFound = true;
                break;
            }
        

    }
    if(isFound === true)
    {
        console.log(index)
    }
    else
    {
        console.log('no')
    }


}
fundamentals([1, 2, 3, 3])