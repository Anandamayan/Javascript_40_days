

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

function secretNumberGame() {
    console.log("Secret number Guessing Game");


    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let userNumber = null;



    while (userNumber !== randomNumber) {
        let userNumberPrompt = prompt("Enter a number between 1 to 10")
        userNumber = parseInt(userNumberPrompt);

        console.log("User Number: ", userNumber);
        console.log("Random Number: ", randomNumber);

        if (isNaN(userNumber) || userNumber < MIN_NUMBER || userNumber > MAX_NUMBER) {
            console.log(`Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);
            continue;
        }

        attempts++;

        if (userNumber > randomNumber) {
            console.log("Higher");
        } else if (userNumber < randomNumber) {
            console.log("Lower");
        } else {
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    }

    const playAgainPrompt = prompt("Do you want to play again? (Yes/No)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        secretNumberGame();
    } else {
        console.log("Thanks, for playing! See you next time.");
    }

}

secretNumberGame();