$(document).ready(function(){
  newGame();
  /*--- Display information modal box ---*/
        $(".what").click(function(){
        $(".overlay").fadeIn(1000);
  });
  /*--- Hide information modal box ---*/
        $("a.close").click(function(){r
                $(".overlay").fadeOut(1000);
        });

  $(".button").click( function (e) {
	e.preventDefault();
    testGuess();
    $('form').children('input').val('').focus();
  });

  $(".new").click( function (){
    newGame();
  });

});

var hiddenNumber;
var userGuess;
var guessCount;
var guessArray;

// Function that will be passed into the New-Game Button
  function newGame() {
    $("#guessList").html('');
    $("h2#feedback").html("Make your guess!");
    guessArray = [];
    hiddenNumber = generateNumber();
    guessNumber = 0;
    $("#count").html(guessNumber);
    $('form').children('input').val('').focus();
    previouslyGuessed = [];
 };
 
      var previouslyGuessed = [];
	  
  function testGuess() {
      var userGuess = parseInt($('#userGuess').val());
      //if the guess is not blank, then run through
      if ($('#userGuess').val() !== '') {
		// for loop to check to see if the number was already guessed
		  for (var i = 0; i < previouslyGuessed.length; i++) {
			  console.log($('#userGuess').val());
			  console.log(previouslyGuessed[i]);
				if ($('#userGuess').val() == previouslyGuessed[i])
					//line to change
					alert('number has already been guessed');
			}
        
      if (userGuess === hiddenNumber) {
         // Correct GUess
          $('#feedback').html('You guessed correctly. Click New Game to start a new game');
        } else if (Math.abs(hiddenNumber - userGuess) <= 10) {
         // If the user is within 10 of the rdm number.
          if (hiddenNumber > userGuess) {
    			 $('#feedback').html('Extreme Heat! (higher)');
    		  } else {
    			 $('#feedback').html('Extreme Heat! (lower)');
    		  }
        } else if (Math.abs(hiddenNumber - userGuess) <= 20) {
        // If the user is within 25 of the rdm number
         if (hiddenNumber > userGuess) {
           $('#feedback').html('Heating up! (higher)');
          } else {
           $('#feedback').html('Heating up! (lower)');
          }
        } else if (Math.abs(hiddenNumber - userGuess) > 30) {
         // if the users' guess is outside of the 40 range
        if (hiddenNumber > userGuess) {
           $('#feedback').html(" You're Cold! (higher)");
          } else {
           $('#feedback').html(" You're Cold! (lower)");
          }
        }


        guessArray.push += " " + userGuess;
        $("#guessList").append('<div>' + userGuess + '</div>');
        guessNumber += 1;
        $("#count").html(guessNumber);
		
		//add the number that was guessed to the array of previouslyGuessed
		previouslyGuessed.push(userGuess);
		console.log(previouslyGuessed);
		//After guessing, clear out the input box and refocus
        $('form').children('input').val('').focus();
      };
   }


  // Random Number Generator 1-100
  function generateNumber () {
    return Math.floor((Math.random() * (100 - 1) ) );
  }














