function factorialDistraction(num1,num2)
{
    function factorial(number)
    {
        let product = 1;
        for(let  i = number; i > 0 ; i --)
        {
          product = product * i
        }
        return product
    }
    let product1 = factorial(num1)
    let product2 = factorial(num2)
    console.log((product1/product2).toFixed(2))


}
factorialDistraction(5,2)