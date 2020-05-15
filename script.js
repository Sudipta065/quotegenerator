let myFetch = fetch(
  `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
);

myFetch
  .then((results) => {
   
    return results.json();
  })
  .then((obj) => {
    function callQuotes() {
      let randomQuotes = obj.quotes[Math.round(Math.random() * 100)];
      document.querySelector('#text').innerHTML = randomQuotes.quote;
      document.querySelector('#author').innerHTML = randomQuotes.author;
    }
    callQuotes();

    document.getElementById('button').addEventListener('click', callQuotes);
  });
