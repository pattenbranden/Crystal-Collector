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

  gameSetup()

  function gameSetup() {
      console.log("Resetting!")
      $("#crystalOptions").empty()
      console.log($("#crystalOptions"))
      var imageCrystal;
      Score = 0
          // append target score to $("#targetScore") *
      targetScore = getRandomInt();
      targetScore = parseInt(targetScore)
      $("#targetScore").html(targetScore)
          // assign gems a point value and add them to #crystalOptions *
      for (var i = 0; i < gemImages.length; i++) {
          imageCrystal = $("<img>");
          imageCrystal.addClass("gem");
          imageCrystal.attr("src", gemImages[i]);
          gemValue = Math.floor(Math.random() * 12 + 1)
          imageCrystal.attr("data-gemValue", gemValue);
          $("#crystalOptions").append(imageCrystal);
          $("#yourScore").html(Score)
          $("#wins").html(wins)
          $("#loses").html(loses)
      };
  };

  // assign a target score to a variable using Math.random *
  function getRandomInt() {
      return Math.floor(Math.random() * 111 + 19);

  };

  // https://stackoverflow.com/questions/21224053/event-listener-click-for-new-element-jquery 
  
  // event listener on click gems *
  document.getElementById("crystalOptions").addEventListener("click",function(e) {if (e.target && e.target.matches("img")) {
    console.log("Anchor element clicked!");
	// e.target was the clicked element

  $(".gem").on("click", function(event) {


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
      } else if (Score > targetScore) {
          // var to track loses*
          gameSetup()
          loses++
          console.log("lose")

      };
  });
}})
});