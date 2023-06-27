const pokemonService = require('../services/pokemonService');

async function getPokemon(req, res){
  const pokemonName = req.params.name;
  try {
    const pokemonData = await pokemonService.getDataFromAPI(pokemonName);

    // Aquí puedes realizar las operaciones adicionales, como crear el registro en la tabla Pokemon, utilizando el modelo correspondiente
    await pokemonService.createPokemon(pokemonData.name, pokemonData.id);
    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos del Pokémon' });
  }
}



module.exports = {
  getPokemon
};