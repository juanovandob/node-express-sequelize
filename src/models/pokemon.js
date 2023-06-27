const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Pokemon = sequelize.define('Pokemons', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_pokemon: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre_pokemon: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Pokemon;
