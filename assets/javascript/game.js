
    $(document).ready(function() {
        console.log("Document Ready!")

var targetScore;
var Score;
var wins;
var loses;



  
 var gemImages = [
  "./assets/images/gemBlue.png",
  "./assets/images/gemYellow.png",
  "./assets/images/gemRed.png",
  "./assets/images/gemPurple.png"
 ]

  // function gemValue() {
    
  //   return gemValue
  
  // }
function gameSetup() {
  for (var i = 0; i < gemImages.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("gem");
    imageCrystal.attr("src", gemImages[i]);
    gemValue = Math.floor(Math.random() * 12 + 1)
    imageCrystal.attr("data-gemValue", gemValue);
    $("#crystalOptions").append(imageCrystal);
  
  };

    targetscore = getRandomInt();
    $("#targetScore").html(targetscore)
  };

function getRandomInt() {
    return Math.floor(Math.random() * 111 + 19); //The maximum is exclusive and the minimum is inclusive
  
  };

gameSetup()

$(".gem").on("click", function(){
  var points = ($(this).attr("data-gemValue"));
  points = parseInt(points);
  Score = ((points) + (Score))
  Score = parseInt(Score)
  $("#yourScore").html(Score)
  console.log("added " + points + " to the score")
  console.log(Score)

  

});


});



// assign a target score to a variable using Math.random *
// append target score to $("#targetScore") *
// use a variable to hold yourScore *
// append yourScore to $("#yourScore")
// event listener on click gems *
// assign gems a point value 
// var to track wins
// var to track loses