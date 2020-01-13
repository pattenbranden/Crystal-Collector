
    $(document).ready(function() {
        console.log("Document Ready!")

var targetScore;
var yourScore;
var wins;
var loses;



  
 var gemImages = [
  "./assets/images/gemBlue.png",
  "./assets/images/gemYellow.png",
  "./assets/images/gemRed.png",
  "./assets/images/gemPurple.png"
 ]

function gameSetup() {
  for (var i = 0; i < gemImages.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("gem");
    imageCrystal.attr("src", gemImages[i]);
    imageCrystal.attr("data-crystalvalue", );
    $("#crystalOptions").append(imageCrystal);
  
  
  function gemValue() {
    gemValue = Math.floor(Math.random() * 12)
    return gemValue
  };
  }

    $("#blue").attr("crystalvalue", 10);
    $("#yellow").attr("data-crystalvalue", );
    $("#red").attr("data-crystalvalue", Math.floor(Math.random() * 12));
    $("#purple").attr("data-crystalvalue", Math.floor(Math.random() * 12));
    getRandomInt();
    targetscore = getRandomInt();
    $("#targetScore").html(targetscore)
  };

function getRandomInt() {
    return Math.floor(Math.random() * 111 + 19); //The maximum is exclusive and the minimum is inclusive
  
  };

gameSetup()

$(".gem").on("click", function(){
  
  console.log("added " + this.crystalvalue + " to the score")

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