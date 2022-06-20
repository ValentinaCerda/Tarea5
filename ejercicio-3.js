// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
const pokemones = [
  {
  nombre: 'Pikachu',
  tipo: 'Electrico'
  },
  {
  nombre: 'Charmander',
  tipo: 'Fuego',
  },
  {
  nombre: 'Bulbasaur',
  tipo: 'Planta'
  },
  {
  nombre: 'Squirtle',
  tipo: 'Agua'
  },
  {
  nombre: 'Charmeleon',
  tipo: 'Fuego'
  },
  {
  nombre: 'Weedle',
  tipo: 'bicho'
  },
  {
  nombre: 'Charizard',
  tipo: 'Fuego'
  }
 ]

const typeFire = pokemones.filter((pokemon) => {
  return pokemon.tipo === 'Fuego'
})
console.log(typeFire);