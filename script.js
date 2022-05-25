const textBox = document.getElementById('animeQuote');
let returnedQuote = [];

// Anime quotes apiURL = https://animechan.vercel.app/guide#random-quote

let getQuoteData = async function getQuote() {
    const apiUrl = 'https://animechan.vercel.app/api/random';
    try {
       const response = await fetch(apiUrl);
       returnedQuote = await response.json();
       console.log(returnedQuote);
       textBox.textContent = returnedQuote.quote;
    } catch (error) {
        console.log("Caught Error at getQuote method", error);
    }
} 


//textBox.innerHTML = getQuoteData();

// On Load
getQuoteData();