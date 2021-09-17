/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * New array of objects to store quotes and other details, such as source, year, citation and occupation.
***/
const quotes = [
  {
    quote: 'Whoever is happy will make others happy too.', source: 'Anne Frank', citation: 'The Diary of a Young Girl', year: '1952'
  },
  {
    quote: 'Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.', source: 'George Orwell', citation: '1984', year: '1949'
  },
  {
    quote: 'Your heart is like a mirror. If you don\'t keep it clean, it will distort the world reflected.', source: 'Abai Kunanbayev', occupation: 'Philosopher and poet'
  },
  {
    quote: 'Achievement is not effectiveness in itself. Effectivenes is the ratio between the results and the costs.', source: 'Ekaterina Schulmann', year: '2020', occupation: 'Political scientist'
  },
  {
    quote: 'Be brave and fearless to know that even if you do make a wrong decision, you\'re making it for a good reason.', source: 'Adele', occupation: 'Singer'
  }
];

/***
 * A function to generate a random number that will be used to return a random quote from the array of objects above.
***/

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}


/***
 * A function that will display a random quote every time a user clicks "Show another quote" button. It also changes the background color everytime a new quote is shown.
***/

function printQuote () {
  
  // A variable that calls getRandomQuote function and keeps a random object from the array of objects.
  let randomQuote = getRandomQuote();
  
  // A varibale that will keep a random quote and related properties and will be displayed on the screen.
  let html = ` 
    <p class='quote'>${randomQuote.quote}</p>
    <p class='source'>${randomQuote.source}`;

  // Checking if an additional property, citation, is present in the random object.
  if (randomQuote.citation) {
    html += `<span class='citation'>${randomQuote.citation}</span>`;
  }

  // Checking if an additional property, year, is present in the random object.
  if (randomQuote.year) {
    html += `<span class='year'>${randomQuote.year}</span>`;
  }

  // Checking if an additional property, occupation, is present in the random object.
  if (randomQuote.occupation) {
    html += `<span class='occupation'>${randomQuote.occupation}</span>`;
  }
 
  //Bringing the variable to the required format.
  html += `</p>`;
  
  //Replacing the contents of 'quote-box' element with the new variable.
  document.getElementById('quote-box').innerHTML = html;

  // Changing the background color of the body element. Re-used the code from Treehouse Refactor Challenge: https://teamtreehouse.com/library/the-refactor-challenge.
  const randomValue = () => Math.floor(Math.random() * 256);
  
  function randomRGB (value) {
    let color = `rgb(${value()}, ${value()}, ${value()})`;
    document.body.style.backgroundColor = color; // changing the background color property, information from https://www.w3schools.com/jsref/prop_doc_body.asp
  }

  randomRGB(randomValue);
}

/***
A new quote is displayed everytime a user presses the button "Show another quote".
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// A new quote is displayed every 10 seconds regardless whether the button "Show another quote" was pressed or not.
setInterval(printQuote, 10000);


