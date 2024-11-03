function meetingArrange(arr)
{
let dayApp = {};
for(const elements of arr)
{
    let [day,name] = elements.split(" ")
    if(dayApp.hasOwnProperty(day))
    {
        console.log(`Conflict on ${day}!`)
    }
    else{
        dayApp[day] = name
        console.log(`Scheduled for ${day}`)

    }
     
}
for(const WeekDays in dayApp)
{   
    console.log(`${WeekDays} -> ${dayApp[WeekDays]}`)
}
}
meetingArrange(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )