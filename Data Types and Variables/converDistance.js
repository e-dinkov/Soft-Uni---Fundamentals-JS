function fundamentals(distance) {
  //  1 kilometer = 0.621371 miles, i reckon u meant the opposite,kilometer * 0.621371 = miles
  let kilometer = distance / 1000
    let miles =  kilometer * 0.621371
    console.log(`${distance} meters is equal to ${kilometer} kilometers.\n${kilometer} kilometers is equal to ${miles.toFixed(2)} miles. `)




}
fundamentals(1852)