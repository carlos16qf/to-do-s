const express = require('express');
const { dataBase } = require('./utils/database');

const { todoRouter } = require('./routers/todo.router');

const app = express();

app.use(express.json());

app.use('/app/v1/todo', todoRouter);

dataBase
  .authenticate()
  .then(() => console.log('Database authenticate'))
  .catch((err) => console.log(err));

dataBase
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('conect app');
});

// Create server Express

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())
