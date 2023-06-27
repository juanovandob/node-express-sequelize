const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Endpoint GET
router.get('/', (req, res) => {
  res.send('¡Hola, mundo! (GET)');
});

// Endpoint POST  -- con los datos en el body  **MAS RECOMENDADO**
/* router.post('/', (req, res) => {
  const { name } = req.body;
  res.send(`¡Hola, ${name}! (POST)`);
}); */

// Endpoint POST  -- con los datos como parametros
router.post('/', (req, res) => {
    const { name } = req.query;
    res.send(`¡Hola, ${name}! (POST)`);
});


// Endpoint GET para obtener información de un Pokémon por nombre
router.get('/pokemon/:name', pokemonController.getPokemon);



module.exports = router;
  
//POSTMAN. GET   http://localhost:3000/pokemon/ditto