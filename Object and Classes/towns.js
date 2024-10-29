function towns(arr

)
{
    for(let elements of arr)
    {
         elements = elements.split(' |')
        let city = elements.shift()
        let latitude = Number(elements.shift())
       let longitude =  Number(elements.shift())
       let townInfo = {
         town :city,
         latitude : latitude.toFixed(2),
         longitude : longitude.toFixed(2)
       }
       console.log(townInfo)
    }
         
//{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
//{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }

}
towns(['Plovdiv | 136.45 | 812.575'])