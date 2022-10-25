function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random () * 6) + 1;
        alert ('You roll a ' + roll + '.');
        if (roll === 1) {
            alert("Game Over, no more rolls!");
            break;
        }
       
        if ((roll === 4) && (goldCoins != 0)) {
            goldCoins --;
            alert("you rolled a 4! you will be fined 1 gold coin. your total is " + (goldCoins));    
        } 
        if ((roll < 5)) {
            continue;
        }
        
        alert("Congradulations! you win " + roll + " Gold coins! totall  of " + (goldCoins + roll));
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
