$(document).ready(function () {
  // prompt for a sentence
    // store in a var and print to console

  ////////////////////////////////////////////////////////////
  //                   Business Logic                       //
  ////////////////////////////////////////////////////////////
  var sentence = prompt("Please provide me with a sentence:");
  console.log(sentence);

  // function to take first and last letter, caps them and return new string

  var capFirstLast = function (sentence) {
    var firstLetter = sentence.slice(0,1);
    var lastLetter = sentence.slice(-1);
    var letters = firstLetter + lastLetter;
    letters = letters.toUpperCase();
    return letters;
  };

  //reverse order of a string and return result

  var reverseString = function (sentence) {
    var reverse = sentence.split("").reverse().join("");
    return reverse;
  };

  //takes in a string, cuts off first and last, reverse order
  //concat new 2 letter string to old string
  var reverseFirstLast = function (text) {
    var letters = capFirstLast(text);
    letters = reverseString(letters);
    return text + letters;
  };

  // count the numbers of letters ina string
  // divide by 2 rounding down return character
  //concat that letter to beginning of original sentence
  var copyMidtoFront = function (sentence) {
    var value = sentence.length / 2;
    value = Math.floor(value);
    var char = sentence.charAt(value);
    return char + sentence;
  }

  // reverse a string
  var newSentence = reverseFirstLast(sentence);
  newSentence = copyMidtoFront(newSentence);
  newSentence = reverseString(newSentence);



  ////////////////////////////////////////////////////////////
  //             User Interface Logic                       //
  ////////////////////////////////////////////////////////////
  //set initial value in html
  $("#output").val(sentence);

  //click event for display original
  $("#original").click(function(){
    $("#output").val(sentence);
  });
  //click event for show encoded
  $("#encode").click(function(){
    $("#output").val(newSentence);

  });
});
