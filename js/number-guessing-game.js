function runGame() {
/*we use const here because it's only going to generate one number per game so technically no variable per game*/

    let guessString = '';
    let guessNumber = 0;
    let correct = false;

    let numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    // const target = Math.floor(Math.random() * 100) + 1; here is short better version of those 3 const//

    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100\n\nWhat is the number?');
        guessNumber = +guessString; //plus before is a unary command that converts a string into a number
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    }while (!correct);
//line 16 takes the two value of guessed number and target and let the while loop to keep running as long as correct is false.
    alert ('You got it! The number was' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly');
}


function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('you have not entered a number. \n\nPlease enter a number in thge 1-100 range.')
    } else if ((guessNumber <1) || (guessNumber>100)) {
        alert('Please enter an integer in the 1-100 range.');
    }else if (guessNumber > target) {
        alert('your number is too large!')
    }else if (guessNumber <target) {
        alert('your numer is too short')
    }else {
        correct = true;
    }
    return correct;
}
