let quoteTag = document.getElementById("quote");

const setQuote = async () => {
    let response = await fetch("https://api.quotable.io/random");
    let quote = await response.json();
    quoteTag.innerHTML = quote.content;
}

setQuote()