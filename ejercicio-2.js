// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

const pokemones = ['Pikachu','Charmander','Bulbasaur','Squirtle'];

const mayusLetter = pokemones.map((pokemon) => pokemon.toUpperCase());
console.log(mayusLetter);