let quoteTag = document.getElementById("quote");

const setQuote = async () => {
    try {
        let response = await fetch("https://api.quotable.io/random");
        let quote = await response.json();
        quoteTag.innerHTML = quote.content + "\n - " + quote.author;
    }
    catch(err) {
        quoteTag.innerHTML = "In my walks, every man I meet is my superior in some way, and in that I learn from him." + "\n - " + "Ralph Waldo Emerson";
    }
}

setQuote()