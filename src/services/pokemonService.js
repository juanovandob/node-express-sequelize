//const axios = require('axios');
const axios = require('axios').default;

async function getDataFromAPI(pokemonName) {
    try {
        // Solicitud utilizando axios
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        //const pokemonData = response.data;
    
        // Devuelve los datos del Pokémon en la respuesta
        return response.data 
        //res.send(pokemonData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error al obtener los datos del Pokémon.' });
      }
}

const Pokemon = require('../models/pokemon');

async function createPokemon(pokemonName, pokemonId) {
  try {
    const [pokemon, created] = await Pokemon.findOrCreate({
      where: { nombre_pokemon: pokemonName },
      defaults: { id_pokemon: pokemonId }
    });

    if (created) {
      console.log('Nuevo Pokémon creado:', pokemon.toJSON());
    } else {
      console.log('El Pokémon ya existe:', pokemon.toJSON());
    }
  } catch (error) {
    console.error('Error al buscar o crear el Pokémon:', error);
    throw error;
  }
}


module.exports = {
  getDataFromAPI,
  createPokemon
};
