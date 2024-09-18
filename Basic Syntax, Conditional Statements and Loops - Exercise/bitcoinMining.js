function fundamentals(shifts) {
    let totalEarning = 0;
    let firstBit = 0;
    let arrayLength = shifts.length;
    let dayEarning = 0
    let bitcoin = 11949.16;
    let bitCounter = 0;
    for (let i = 0; i < arrayLength; i++) {
      if ((i+1) % 3 === 0) {
        dayEarning = (shifts[i] * 67.51) * 0.7
      }
      else {
        dayEarning = shifts[i] * 67.51
      }
      totalEarning += dayEarning
      if (firstBit < 1 && totalEarning >= bitcoin) {
        firstBit = i + 1;
  
      }
      if (totalEarning >= bitcoin) {
        bitCounter += Math.floor(totalEarning / bitcoin);
        totalEarning -= Math.floor(totalEarning / bitcoin) * bitcoin;
      }
      dayEarning = 0;
  
    }
    console.log(`Bought bitcoins: ${bitCounter}`)
      if(firstBit > 0)
  
      {
        console.log(`Day of the first purchased bitcoin: ${firstBit}`)
      }
    console.log(`Left money: ${totalEarning.toFixed(2)} lv.`)
}