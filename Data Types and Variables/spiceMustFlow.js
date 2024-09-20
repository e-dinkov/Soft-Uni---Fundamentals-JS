function fundamentals(yield) {
    let dailyYield = yield
    let totalStorage = 0;
    let days = 0;
    if(yield < 100)
    {

        console.log('0\n0')
        return
    }
    while(yield >= 100)
    {
        dailyYield = yield
        dailyYield -= 26;
        yield -= 10
        totalStorage += dailyYield
        if(yield < 100) 
        { totalStorage -= 26;
            days ++;
            break;
        }
        else
        {
            days ++;
           
            
        }

    }
    console.log(days)
    console.log(totalStorage)

 

}
fundamentals(450)