// FSJS - Random Quote Generator
var message = ''
// Create the array of quote objects and name it quotes
var quotes = [
  { quote: "If you fail to plan, you are planning to fail!",
    author:"Benjamin Franklin"},
  { quote: "Great ideas often recieve violent opposition from mediocre minds",
    author: "Albert Enstein"},
  { quote: "Ninety-nine percent of the failures come from people who have the habit of making excuses",
    author: "George Washington Carver"}
];
var quote = ''


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(quote){
  var quoteForm = '<p>'+ message+'</p>';
  select = Math.floor(Math.random()*quotes.length);
  quoteForm = quotes[select].quote;
  return quoteForm;
}

message= getRandomQuote(quote);


// Create the printQuote funtion and name it printQuote
function printQuote(message) {
  var outputDiv = document.getElementById("quote");
  outputDiv.innerHTML = message
}







// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
