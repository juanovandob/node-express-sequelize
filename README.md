# Ejemplo de cómo generar un proyecto con Node.js y Express

En este proyecto se muestra una forma de crear y organizar un proyecto de Node.js con Express y Sequelize. El objetivo es consumir la API de Pokémon y realizar consultas enviando el nombre del Pokémon. Además, se establece una conexión con una base de datos PostgreSQL, donde se insertan los datos del Pokémon obtenidos de la API. Cabe destacar que el ID utilizado en la base de datos es independiente del ID proporcionado por la API.

## Características

- Creación y estructura básica de un proyecto Node.js y Express.
- Consumo de la API de Pokémon para obtener información de los Pokémon.
- Integración de Sequelize para la conexión y manipulación de una base de datos PostgreSQL.
- Almacenamiento de los datos del Pokémon consultado en la base de datos.

## Configuración

Antes de ejecutar el proyecto, asegúrate de seguir estos pasos:

1. Clona el repositorio o descarga el código fuente.

2. Instala las dependencias del proyecto ejecutando el siguiente comando:

`npm install`


3. Crea una base de datos PostgreSQL y configura las credenciales de conexión en el archivo `.env`.

4. Ejecuta las migraciones para crear las tablas necesarias en la base de datos utilizando el siguiente comando:

`npx sequelize-cli db:migrate`


## Uso

Para ejecutar el proyecto, utiliza el siguiente comando:

`npm start`

Esto iniciará el servidor y podrás realizar consultas a la API de Pokémon enviando el nombre del Pokémon deseado. Los datos del Pokémon se guardarán en la base de datos PostgreSQL configurada.

¡Explora y disfruta del proyecto!


