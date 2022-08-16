const quotes = [
    {
    quote: "Don't dream,Be it",
    author:"Tim curry",
   },
   {
    quote: "No pain, No gain",
    author: "Benjanmin Franklin",
   },
   {
    quote: " The die is cast",
    author:"When they go low, we go high", 
  },
  {
    quote: "Seeing is believing",
    author: "Thomas Fuller",
  },
  {
    quote: "Only i can change my life, no one can do it for me",
    author:"Carol Burnett",
  },
  {
    quote:"Life is unfair, get used to it",
    author:"bill Gates",

  },
  {
    quote:"Life is a journey",
    author:"Ralph Waldo Emerson",
  },
  {
    quote:"I was never less alone than when by myself",
    author:"Edward Gibbon",
  },
  {
    quote:"A friend is a second myself",
    author:"Aristotles"
  },
  {
    quote:"When in doubt, choose change",
    author:"Lily Leung",
  }
]

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;