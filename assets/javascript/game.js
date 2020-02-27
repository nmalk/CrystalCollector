
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
var randomNum = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;

//Create variables to hold references in the HTML
var randomNumberText = document.getElementById("number-to-guess");
var totalScoreText = document.getElementById("total-score");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

winsText.textContent= "Wins:" + wins;
lossesText.textContent ="Losses:" + losses;
totalScoreText.textContent = "Total score:" + totalScore;
randomNumberText.textContent = randomNum;



//Create random number for crystalValue
$(document).ready(function() {
  
    $("#crystals").on("click", function() {
      
      var crystalValue ="";
        var crystalValue = [Math.floor(Math.random()*12) +1];
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
      console.log(crystalValue);

      if (totalScore=== randomNum){
        wins++;
        document.getElementById("wins").innerHTML = ("wins" + wins);
      }
      else if (totalScore!== randomNum){
        //restart game?
      }
      else  {
        losses++;
        document.getElementById("losses").innerHTML = ("losses" + losses);
      } 

    });

  //Create random number to display in "random number" text
$(".col-sm-4").each(function(){
  
  var randomNum =[Math.floor(Math.random()* (120-19)) + 19];
  randomNum = parseInt(randomNum);
  $(this).addClass(randomNum.toString());
  document.getElementById("number-to-guess").innerHTML = randomNum;

console.log(randomNum);
});

  });



