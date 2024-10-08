
function palindromeInt(arr)
{  function palindromeCheck(number)
{
    number = number.toString()
    let reverseNumber = number.split('').reverse().join('')
    if(reverseNumber === number)
    {
        return true
    }
    else {
        return false
    }
    console.log(reverseNumber)
}  
    for(let i = 0; i < arr.length; i++)
    {
     console.log(palindromeCheck(arr[i]))
    }

    }
    palindromeInt([123,323,421,121])