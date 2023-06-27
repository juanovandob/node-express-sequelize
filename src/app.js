const express = require('express');
const indexRouter = require('./routes/index');
const sequelize = require('../config/database');

//IMPORTANDO MODELOS
const Pokemon = require('./models/pokemon');

// Verifica la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', indexRouter);

// Puerto
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
