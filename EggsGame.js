// Guess the Number of Eggs game

// pick a random number between 1 and 10
var secretEggs = Math.floor(Math.random() * 10) + 1;

var input = document.getElementById("eggGuess");
var button = document.getElementById("checkEgg");
var message = document.getElementById("message");
var playAgainBtn = document.getElementById("playAgain");

// hide play again at the start
playAgainBtn.style.display = "none";

button.addEventListener("click", function () {
  var guess = Number(input.value);

  if (!guess && guess !== 0) {
    message.textContent = "Type a number first!";
  } else if (guess < 1 || guess > 10) {
    message.textContent = "Stay between 1 and 10 eggs!";
  } else if (guess === secretEggs) {
    message.textContent = "Correct! You guessed the eggs!";
    playAgainBtn.style.display = "inline-block";
  } else if (guess < secretEggs) {
    message.textContent = "Too low, there are more eggs...";
  } else {
    message.textContent = "Too high, there are fewer eggs...";
  }
});

playAgainBtn.addEventListener("click", function () {
  // pick a new random number
  secretEggs = Math.floor(Math.random() * 10) + 1;

  // reset UI
  input.value = "";
  message.textContent = "New round! Guess the number of eggs.";
  playAgainBtn.style.display = "none";
});
