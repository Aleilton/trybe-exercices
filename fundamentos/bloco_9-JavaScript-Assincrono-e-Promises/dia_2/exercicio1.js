const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  const pJoke = document.getElementById('joke');
  pJoke.innerHTML = joke.joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      appendJoke(data);
    });
};

// // fetch('https://pokeapi.co/api/v2/pokemon/psyduck')
// //   .then((response) => response.json() )
// //   .then((object) => {
// //     appendPokemon(object);
// //   });

window.onload = () => fetchJoke();
