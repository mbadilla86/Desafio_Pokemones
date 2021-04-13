console.log('Hola Mundo')
$(document).ready(function(){
  // $.ajax('https://pokeapi.co/api/v2/pokemon/')
  // done(function(data){
  //   // debugger;
  //   data.results.forEach(function(pokemon){
  //     addPokemon(pokemon);
  //   });
  //   $('#more-pokemons').attr('data-next', data.next);
  // });
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function(data){
      return data.json()
    })
    .then(function(data){
      console.log(data)
      data.results.forEach(pokemon => {
        document.querySelector('#pokemons').innerHTML = `<h1>${pokemon.name}</hi>`
      });
    })
})

// $(document).ready(function(){
//   fetch('https://pokeapi.co/api/v2/pokemon/').then((data) => {
//       return data.json()
//   }).then((data) => {
//       data.results.forEach(pokemon => {
//           const pokemons = document.getElementById("pokemons");
//           const newPokemon = document.createElement("LI");
//           newPokemon.innerHTML = `${pokemon.name}`
//           pokemons.appendChild(newPokemon);
//       })
//   })
// })