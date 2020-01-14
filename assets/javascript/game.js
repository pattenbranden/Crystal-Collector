
    $(document).ready(function() {
        console.log("Document Ready!")




  
 var gemImages = [
  "./assets/images/gemBlue.png",
  "./assets/images/gemYellow.png",
  "./assets/images/gemRed.png",
  "./assets/images/gemPurple.png"
 ]
  var targetScore = 0;
  var Score = 0;
  var wins = 0;
  var loses = 0;

  // function gemValue() {
    
  //   return gemValue
  
  // }
function gameSetup() {
  $("#crystalOptions").empty()
  console.log("Resetting!")
  for (var i = 0; i < gemImages.length; i++) {
// assign gems a point value *
    var imageCrystal = $("<img>");
    imageCrystal.addClass("gem");
    imageCrystal.attr("src", gemImages[i]);
    gemValue = Math.floor(Math.random() * 12 + 1)
    imageCrystal.attr("data-gemValue", gemValue);
    $("#crystalOptions").append(imageCrystal);
    Score = 0
    $("#yourScore").html(Score)
    $("#wins").html(wins)
    $("#loses").html(loses)
  
  };

    targetScore = getRandomInt();
    targetScore = parseInt(targetScore)

// append target score to $("#targetScore") *
    $("#targetScore").html(targetScore)
  };

// assign a target score to a variable using Math.random *
function getRandomInt() {
    return Math.floor(Math.random() * 111 + 19);
  
  };

  gameSetup()

  var Score = 0
// event listener on click gems *
$(".gem").on("click", function(){
  var points = ($(this).attr("data-gemValue"));
  points = parseInt(points);
  
  Score = ((points) + (Score))
  
  Score = parseInt(Score)
// append yourScore to $("#yourScore")
  
  $("#yourScore").html(Score)
  console.log("added " + points + " to the score")
  console.log("current Score is " + Score)
  
  if (Score == targetScore) {
// var to track wins*
  wins++
  console.log("win")
  gameSetup()
} else if (Score > targetScore){
// var to track loses*
  loses++
  console.log("lose")
  gameSetup()

};

  

});
    });


