const textBox = document.getElementById('animeQuote');
const animeName = document.getElementById('animeName');
const getQuoteBtn = document.getElementById('newQuoteBtn');
let returnedQuote = [];

// Anime quotes apiURL = https://animechan.vercel.app/guide#random-quote

let getQuoteData = async function getQuote() {
    const apiUrl = 'https://animechan.vercel.app/api/random';
    try {
       const response = await fetch(apiUrl);
       returnedQuote = await response.json();
       console.log(returnedQuote);
       textBox.textContent = returnedQuote.quote;
       animeName.textContent = returnedQuote.anime;
    } catch (error) {
        console.log("Caught Error at getQuote method", error);
    }
} 

// Generating a quote when button is clicked
getQuoteBtn.addEventListener('click', () =>{
    console.log("Click is working");
    getQuoteData();
});


//textBox.innerHTML = getQuoteData();

// On Load
getQuoteData();