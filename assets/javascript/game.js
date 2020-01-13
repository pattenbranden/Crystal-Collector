
    $(document).ready(function() {
        console.log("Document Ready!")

var targetScore;
var yourScore;
var wins;
var loses;

function getRandomInt() {
    return Math.floor(Math.random() * 111 + 19); //The maximum is exclusive and the minimum is inclusive
  
  };

  
  targetscore = getRandomInt();

function gameSetup() {
    $("#blue").attr("data-crystalvalue", Math.floor(Math.random() * 12));
    $("#yellow").attr("data-crystalvalue", Math.floor(Math.random() * 12));
    $("#red").attr("data-crystalvalue", Math.floor(Math.random() * 12));
    $("#purple").attr("data-crystalvalue", Math.floor(Math.random() * 12));
    getRandomInt();
    $("#targetScore").html(targetscore)



    
  
};
gameSetup()

$(".gem").on("click", gemClick())
function gemClick() {
  yourScore += this.crystalvalue
}


});



// assign a target score to a variable using Math.random 
// append target score to $("#targetScore")
// use a variable to hold yourScore
// append yourScore to $("#yourScore")
// event listener on click gems 
// assign gems a point value 
// var to track wins
// var to track loses