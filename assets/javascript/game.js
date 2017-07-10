<script type="text/javascript">

    // Creates an array that lists out all of the options (all letters of the alphabet).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Variables for tracking our wins, losses and ties. They begin at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 10;

    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerChoice)

    // When the user presses a key, it will run the following function...
    document.onkeypress = function(event) {
      var userGuess = event.key;

      if(userGuess === computerChoice){
        wins++;
        }else{
          guesses--;
        }

      if(guesses === 0){
        losses++
        } 

    document.getElementById('wins') = "Wins: " + wins;
    document.getElementById('losses') = "Losses: " + losses;
    document.getElementById('guesses') = "Your Guesses so far: " + guesses;
  }
  </script>