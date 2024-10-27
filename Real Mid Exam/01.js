function springVacation(arr) {
    let days = +arr[0];
    let budget = +arr[1];
    let people = +arr[2];
    let fuelPrice = +arr[3];
    let foodExpense = +arr[4];
    let roomPrice = +arr[5];
    let dayTravelArr = arr.slice(6).map(x => +x);

    
    let accommodationCost = roomPrice * people * days;
    if (people > 10) {
        accommodationCost *= 0.75;  
    }
    let foodCost = foodExpense * people * days;
    let expenses = accommodationCost + foodCost;

    for (let i = 0; i < days; i++) {
        
        expenses += dayTravelArr[i] * fuelPrice;

        
        if ((i + 1) % 3 === 0 || (i + 1) % 5 === 0) {
            expenses *= 1.4;  
        }

        
        if ((i + 1) % 7 === 0) {
            expenses -= expenses / people;
        }

        
        if (expenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
            return;
        }
    }

    
     if (expenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
            return;
        }
    console.log(`You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`);
}

springVacation(["10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300"]


)
/*On the 1st line, you are going to receive the days of the trip - an integer in the range [1…20].
On the 2nd line - the budget - a real number in the range [0.00 - 100000.00].
On the 3rd line - the number of people - an integer in the range [1 - 20].
On the 4th line - the price for fuel per kilometer - a real number in the range [0.00 - 2.00].
On the 5th line - food expenses per person for a day - a real number in the range [0.00 - 50.00].
On the 6th line - the room's price for a night per person - a real number in the range [0.00 - 1000.00].
On the next n lines - one for each of the days - the traveled distance in kilometers per day - a real number in the range [0.00 - 1000.00].
*/