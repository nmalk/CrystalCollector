
//Create variables
var crystal = {
  blue: {
    name: "Blue",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  red: {
    name: "Red",
    value: 0
  },
  yellow: {
    name: "Yellow",
    value: 0
  },
}
var randomNumber = 0;
var yourScore = 0;
var wins = 0;
var losses = 0;

//Function to get random number
var getRandom = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the game (and restarts the game)
var startGame = function() {
  // Reset the currentScore
  yourScore = 0;

  // Set a new targetScore (between 19-120)
  randomNumber = getRandom(19,120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value = getRandom(1,12);
  crystal.green.value = getRandom(1,12);
  crystal.red.value = getRandom(1,12);
  crystal.yellow.value = getRandom(1,12);

  // Change the HTML to reflect all of the changes
  $("#randomNumber").html(randomNumber);
  $("#yourScore").html(yourScore);

  // Testing
  console.log("*************************");
  console.log("Target score" + randomNumber);
  console.log("Blue:" + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
  console.log ("************************");
}

// Respond to the clicks of the crystals
var addValue = function(crystal) {
  yourScore = yourScore + crystal.value;

  //Change the HTML to reflect changes in currentScore
  $("#yourScore").html(yourScore);

  //call the checkWin function
  checkScore();

  console.log("Your score: " + yourScore);
}

// Check if user won or lost and reset the game
var checkScore = function() {
  if(yourScore > randomNumber) {
      alert("Sorry, You lost!");
      console.log("You lost");

      // Add to loss counter
      losses++;

      //Change the loss count HTML
      $("#losses").html(losses);
      //restart the game
      startGame();
  } 
  else if (yourScore === randomNumber) {
      alert("Congratulations, You won!");
      console.log("You won");

      //Add to win counter
      wins++;

      //Change the win count HTML
      $("#wins").html(wins);
      //restart the game
      startGame();
  }

}

// MAIN PROCCES
// ********************************************************************

// Starts the game the first time
startGame();

$("#blue").click(function () {
        addValue(crystal.blue);
});

$("#green").click(function () {
        addValue(crystal.green);
});

$("#red").click(function () {
        addValue(crystal.red);
});

$("#yellow").click(function () {
        addValue(crystal.yellow);
});