// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  { quote: "If you fail to plan, you are planning to fail!",
    author:"Benjamin Franklin",
    citation: "The Minneapolis Tribune",
    year:"1970" },
  { quote: "Great ideas often recieve violent opposition from mediocre minds.",
    author: "Albert Enstein",
    citation: "Letter to Morris Raphael",
    year: "1940"},
  { quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "H. Jackson Brown Jr.",
    citation: "P.S. I Love You",
    year:"2007"},
  { quote: "It is better to be hated for what you are than to be loved for what you are not",
    author: "Andre Gide",
    citation: "Autumn Leaves",
    year:"2012"},
  { quote: "Don't panic.",
    author: "Douglas Adams",
    citation: "The Hitchhikers Guide to the Galaxy",
    year:"2005"},
  ];

var color = [
  [66, 134, 244],
  [122, 122, 122],
  [72, 112, 79]
]




// This function requests an array of objects argument and selects a random index
function getRandomQuote(quote){
   return quote[Math.floor(Math.random() * quote.length)];
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
var message = '';//creates an empty string that will accept the quote
var result = getRandomQuote(quotes);//decides which index to select
message = "<p class='quote'>"+ result.quote + "</p>";
message+= "<p class = 'source'>"+ result.author + "</p";
message+= "<span class='citation'> "+'<i>'+ result.citation+'</i>' + "</span>"
message+="<span class='year'> "+ result.year + "</span>"//saves the quote to the empty string
var outputDiv = document.getElementById("quote-box");
outputDiv.innerHTML = message;//injects it into the DOM
}

printQuote();// Calling the function to be pulled by the click event







// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Displays printquote stored in DOM when clicked.
