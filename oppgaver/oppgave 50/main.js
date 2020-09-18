let randomNum = Math.floor(Math.random() * 28 + 1);
let guesses = 0;

function guessNumber() {
    let guess = parseInt(prompt("Guess a number"));
    guesses++;

    if (guess < randomNum) {
        console.log("Number do be higher doe");
        guessNumber();
    } else if (guess > randomNum) {
        console.log("Number really do be lower doe");
        guessNumber();
    }
    else if (guess === randomNum) {
        guesses++;
        console.log("Yea, u kinda got it right doe");
        console.log(`You guessed ${guesses} times u little shit`);
    }
}

guessNumber();
