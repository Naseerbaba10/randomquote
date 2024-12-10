async function fetchQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        const data = await response.json();

        // Ensure `quotes` is correctly accessed
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];

        // Safely access properties
        document.getElementById('quote').innerText = randomQuote ? randomQuote.quote : "No quote available";
        document.getElementById('author').innerText = randomQuote ? `- ${randomQuote.author}` : "- Unknown";
    } catch (error) {
        // Handle errors
        document.getElementById('quote').innerText = "Error: " + error.message;
        console.error(error);
        document.getElementById('author').innerText = "- Try again later";
    }
}
