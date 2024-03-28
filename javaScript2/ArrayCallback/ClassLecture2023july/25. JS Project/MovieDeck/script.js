
// Selector

const movieListContainer = document.getElementById("movie-list");

// Search bar Elements
const searchInputBoxElement = document.getElementById("search-input");
const searchButtonElement = document.getElementById("search-button");

// sorting option button selector
const sortByDateButtonElement = document.getElementById("sort-by-date");
const sortByRateButtonElement = document.getElementById("sort-by-rating");

// tab button Selector
const allTabButtonElement = document.getElementById("all-tab");
const favouritesTabButtonElement = document.getElementById("favourites-tab");

// pagination button selector
const prevButtonElement = document.getElementById("prev-button");
const nextButtonElement = document.getElementById("next-button");
const pageNumberButtonElement = document.getElementById("page-number-button");



// --------------------------------------------------


// 1. FRTCH THE DATA

async function fetchData(){
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=7381398c";
    const response = await fetch(url);
    const data = await response.json();


    return data;
}


// 2. render the data.....

// 3. render the card .... input as all cards and render it "" RETURN : true.

// 4. Facilitator

fetchData()