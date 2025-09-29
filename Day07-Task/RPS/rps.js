
function rockPaperScissorGame() {
    console.log("Getting started to Rock, Paper, Scissor Game");
    const userChoicePrompt = prompt("Enter Rock, Paper or Scissor")
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case "1":
            computerChoice = "rock";
            break;
        case "2":
            computerChoice = "paper"
            break;
        default:
            computerChoice = "scissor"
    }

    // if(randomNumber === 1){
    //     computerChoice = "rock";
    // }else if(randomNumber === 2){
    //     computerChoice = "paper";
    // }else{
    //     computerChoice = "scissor";
    // }

    console.log("User Choice is : ", userChoice);
    console.log("Computer Choice is : ", computerChoice);

    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("You the User Win!...");
    } else if (userChoice === computerChoice) {
        console.log("The game is a Tie, try again");
    } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "rock")
    ) {
        console.log("Computer Wins!");
    } else {
        console.log("Please check the input we didn't understand");
    }

    const playAgainPrompt = prompt("Do you want to play again? (Yes/No)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorGame();
    } else {
        console.log("Thanks, for playing! See you next time.");
    }


}

rockPaperScissorGame();