// Step 1. Create array for the options

let options = ["Rock", "Paper", "Scissors"];

// Step 2. Create a function that randomly generates the computers choice

function getComputerChoice() {
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}
// Step 3. Create a function that plays a round and prompts the user to choose an
//          option from the array

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's TIE";
  } else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Rock" && computerSelection === "Scissors")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection}  beats ${playerSelection}`;
  }
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

// Step 4. Create a function that plays the game for 2 rounds

let playerScore = 0;
let computerScore = 0;

function game() {
  let result = playRound(playerSelection, computerSelection);
  if (result === "You Win") {
    playerScore++;
  } else if (result === "You lose") computerScore++;
}
