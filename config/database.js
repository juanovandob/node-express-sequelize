require('dotenv').config();// Carga las variables de entorno desde el archivo .env
const Sequelize = require('sequelize'); //importa ORM

/* const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  }); */

  const dbUsername = process.env.DB_USERNAME;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbPort = process.env.DB_PORT;
  const dbDatabase = process.env.DB_DATABASE;
  
  const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres'
  });
  
  module.exports = sequelize;