
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
  randomNumber = randomNumber + crystal.value;

  //Change the HTML to reflect changes in currentScore
  $("#yourScore").html(yourScore);

  //call the checkWin function
  checkWin();

  console.log("Your score: " + randomNumber);
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











//Create variables to hold references in the HTML
// var randomNumberText = document.getElementById("number-to-guess");
// var totalScoreText = document.getElementById("total-score");
// var winsText = document.getElementById("wins");
// var lossesText = document.getElementById("losses");

// winsText.textContent= "Wins:" + wins;
// lossesText.textContent ="Losses:" + losses;
// totalScoreText.textContent = "Total score:" + totalScore;
// randomNumberText.textContent = randomNum;



//Create random number for crystalValue
// $(document).ready(function() {
  
//     $("#crystals").on("click", function() {
      
//       var crystalValue ="";
//         var crystalValue = [Math.floor(Math.random()*12) +1];
//         crystalValue = parseInt(crystalValue);
//         totalScore += crystalValue;
//       console.log(crystalValue);

//       if (totalScore=== randomNum){
//         wins++;
//         document.getElementById("wins").innerHTML = ("wins" + wins);
//       }
//       else if (totalScore!== randomNum){
//         //restart game?
//       }
//       else  {
//         losses++;
//         document.getElementById("losses").innerHTML = ("losses" + losses);
//       } 

//     });

//   //Create random number to display in "random number" text
// $(".col-sm-4").each(function(){
  
//   var randomNum =[Math.floor(Math.random()* (120-19)) + 19];
//   randomNum = parseInt(randomNum);
//   $(this).addClass(randomNum.toString());
//   document.getElementById("number-to-guess").innerHTML = randomNum;

// console.log(randomNum);
// });

//   });



