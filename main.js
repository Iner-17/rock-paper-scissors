// Username will be printed to the top of the guess pic

let userName = prompt("Enter your name");
let otherName = userName.slice(1);
let firstLetter = userName.slice(0, 1);
document.querySelector(".player-name").textContent =
  firstLetter.toUpperCase() + otherName.toLowerCase();

let playerGuess = document.querySelector(".player-guess");
let botGuess = document.querySelector(".bot-guess");

function displayRock() {
  playerGuess.textContent = "Rock";
  botGuess.textContent = ". . .";
}

function displayPaper() {
  playerGuess.textContent = "Paper";
  botGuess.textContent = ". . .";
}

function displayScissors() {
  playerGuess.textContent = "Scissors";
  botGuess.textContent = ". . .";
}

function showResult() {
  if (playerGuess.textContent === "Rock") {
    botGuess.textContent = "Paper";
    alert("Bot: better luck next time");
  } else if (playerGuess.textContent === "Paper") {
    botGuess.textContent = "Scissors";
    alert("Bot: try again");
  } else {
    botGuess.textContent = "Rock";
    alert("Bot: you lose");
  }
}
