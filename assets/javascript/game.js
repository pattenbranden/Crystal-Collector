
    $(document).ready(function() {
        console.log("Document Ready!")

var targetScore;
var yourScore;
var wins;
var loses;
getRandomInt();
targetscore = getRandomInt();

function getRandomInt(min, max) {
    min = Math.ceil(19);
    max = Math.floor(160);
    return Math.floor(Math.random() * (160 - 19)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  
});


// assign a target score to a variable using Math.random 
// append target score to $("#targetScore")
// use a variable to hold yourScore
// append yourScore to $("#yourScore")
// event listener on click gems 
// assign gems a point value 
// var to track wins
// var to track loses