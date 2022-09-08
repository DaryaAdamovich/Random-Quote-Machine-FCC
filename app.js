window.onload = init;
const quotes = [
    { quote: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
    { quote: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
    { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { quote: "There are no shortcuts to any place worth going.", author: "Helen Keller" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    { quote: "Every man dies, not every man lives.", author: "William Wallace" },
    { quote: "Remember no one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
    { quote: "Life is a mirror and will reflect back to the thinker what he thinks into it.", author: "Ernest Holmes" },
    { quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein" },
    { quote: "There are people who have money and people who are rich.", author: "Coco Chanel" },
    { quote: "If you dream it, you can do it.", author: "Walt Disney" },
]


function init() {
    generateQuote();
}
function generateQuote() {
    let quoteSize = quotes.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = quotes[randomIndex];
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}