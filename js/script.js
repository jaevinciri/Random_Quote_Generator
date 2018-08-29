// FSJS - Random Quote Generator
<<<<<<< HEAD

=======
var message = '';
>>>>>>> 05578ebfab724d1dd539bd1ea35a2c864248fcfb
// Create the array of quote objects and name it quotes
var quotes = [
  { quote: "If you fail to plan, you are planning to fail!",
    author:"Benjamin Franklin"},
  { quote: "Great ideas often recieve violent opposition from mediocre minds.",
    author: "Albert Enstein"},
  { quote: "Ninety-nine percent of the failures come from people who have the habit of making excuses.",
    author: "George Washington Carver"}
];
<<<<<<< HEAD
=======
var quote = '';

>>>>>>> 05578ebfab724d1dd539bd1ea35a2c864248fcfb



// This function requests an array of objects argument and selects a random index
function getRandomQuote(objects){
   return objects[Math.floor(Math.random() * objects.length)];
}

// Create the printQuote funtion and name it printQuote
<<<<<<< HEAD
function printQuote() {
var message = '';//creates an empty string that will accept the quote
var result = getRandomQuote(quotes);//decides which index to select
message = "<p class='quote'>"+ result.quote + "</p>";//saves the quote to the empty string
var outputDiv = document.getElementById("quote-box");
outputDiv.innerHTML = message;//injects it into the DOM
=======
function printQuote(message) {
  var outputDiv = document.getElementById("quote");
  outputDiv.innerHTML = message;
>>>>>>> 05578ebfab724d1dd539bd1ea35a2c864248fcfb
}

printQuote();// Calling the function to be pulled by the click event







// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Displays printquote stored in DOM when clicked.
