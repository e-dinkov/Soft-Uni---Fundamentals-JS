function fundamentals(town, population, area) {
    let error = false;
    if (town.length < 3) {
        console.log("Town name must be at least 3 characters!")
        error = true;

    }
    if (population < 0) {
        console.log(`Population must be a positive number!`)
        error = true;
    }
    if (area < 0) {
        console.log(`Area must be a positive number!`)
        error = true;
    }
    if (error !== true) {
         console.log(`Town ${town} has population of ${population} and area ${area} square km.`) 
        }





}
fundamentals('ia', 1286383, 492)