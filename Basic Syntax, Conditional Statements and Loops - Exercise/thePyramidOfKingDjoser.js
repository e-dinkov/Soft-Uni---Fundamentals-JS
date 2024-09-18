function fundamentals(size, increment) {
    let gold;
    let verticalCounter = 0;
    let marble = 0;
    let stone = 0;
    let lazuli = 0;
    for (let i = size; i >= 1; i -= 2) {
      verticalCounter++;
      if (i === 2) {
        gold = 4 * increment;
        break
      }
      if (i === 1) {
        gold = 1 * increment;
        break;
      }
      stone += (i - 2) * (i - 2) * increment;
      if (verticalCounter % 5 === 0) {
        lazuli += ((i * i) - ((i - 2) * (i - 2)))*increment;
      }
      else 
      {
        marble += ((i * i) - ((i - 2) * (i - 2)))*increment;
      }
    }
    verticalCounter = Math.floor(verticalCounter * increment)
  
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${verticalCounter}`)
  }