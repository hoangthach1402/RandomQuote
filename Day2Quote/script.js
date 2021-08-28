const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

btnnewQuote.addEventListener('click', () => {})

let apiQuotes = []
// show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  //   console.log(123)
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  quoteText.innerText = quote.text
  authorText.innerText = quote.author
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {
    getQuotes()
  }
}
