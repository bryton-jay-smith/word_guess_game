//console.log("External JS Loaded - Hangman.js")

$(document).ready(function() { //console.log("JQuery Loaded");

  // Array of Possible Anwsers
  var anwsers = [
    "mario",
    "luigi",
    "peach",
    "toad",
    "yoshi",
    "bowser",
    "toadette",
    "daisy",
    "rosalina",
    "wario",
    "waluigi",
    "cappy",
    "koopa",
    "boo",
    "pauline"];
    //console.log(anwsers.length + " possible anwsers loaded");

    // Pick a random anwser and convert it to an array
    var anwser = anwsers[Math.floor(Math.random() * anwsers.length)];
    anwser = anwser.split('');
    console.log(anwser);

    // Create unsolved anwser based on solution
    var correct = [];
    for (i = 0; i < anwser.length;i++) {
      correct.push(" _ ");
    };
    console.log(correct);
    pushTo();

    function pushTo () {
      output = correct.toString();
      output = output.replace(/,/g, ' ');
      $("#displayAnwser").text(output);

    }



    // collect User input
    document.onkeyup = function(event) {
      var userGuess = event.key; console.log(userGuess);
      $("#displayGuess").append(" " + userGuess + " ");


      // compare input to anwser
      for (i=0;i<anwser.length;i++) {
        if (userGuess === anwser[i]) {
          console.log(userGuess + " = " + anwser[i] + " at slot " + i);
          correct[i] = userGuess;
          pushTo();
        }
      }
      if (correct.toString() == anwser.toString()) {alert("You guessed it! You win!"); } else {console.log("not yet");}
    }
});
