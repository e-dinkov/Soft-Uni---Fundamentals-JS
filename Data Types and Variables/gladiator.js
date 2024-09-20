function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let shieldBreakCount = 0;

    for (let fight = 1; fight <= lostFightsCount; fight++) {
        if (fight % 2 === 0) {
            totalExpenses += helmetPrice; 
        }
        if (fight % 3 === 0) {
            totalExpenses += swordPrice; 
        }
        if (fight % 2 === 0 && fight % 3 === 0) {
            totalExpenses += shieldPrice; // 
            shieldBreakCount++;
            if (shieldBreakCount % 2 === 0) {
                totalExpenses += armorPrice; 
            }
        }
    }

    console.log(`Gladiator  expenses: ${totalExpenses.toFixed(2)} aureus`);
}


gladiatorExpenses(7, 2.5, 3.0, 4.0, 5.0); 
