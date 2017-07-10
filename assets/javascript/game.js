// Define alphabet letters that computer can pick from
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// users guesses
var guessesSoFar = [];
var userGuess = null;
// Computer guess
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {

  // Keys are saved to userGuess
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Add the user's guess to guessesSoFar
  if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    // if it is a new letter then decrease remaining guesses by 1
    guessesLeft--;
  }

  // if letterToBeGuessed is same as userGuess then it's a win
  if (letterToBeGuessed == userGuess) {
    wins++;
    console.log("You won!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
  }

  // if guessesLeft gets to 0 then it's as a loss
  if (guessesLeft == 0) {
    losses++;
    console.log("You lose!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
  }

  // Display to HTML
  var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";

  document.querySelector("#game").innerHTML = html;

}