document.addEventListener('DOMContentLoaded', function() {
    const jokeText = document.getElementById('jokeText');
    const jokeButton = document.getElementById('jokeButton');
  
    function getDadJoke() {
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'text/plain' // We want plain text jokes
        }
      })
      .then(response => response.text()) // Get the response as text
      .then(data => {
        jokeText.innerHTML = data.replace(/\n/g, '<br>'); // Display the joke, replace newlines
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        jokeText.innerHTML = "Oops! Couldn't get a joke right now. Try again later."; // Display an error message
      });
    }
  
    jokeButton.addEventListener('click', getDadJoke);
  
    // Get the first joke when the page loads
    getDadJoke();
  });