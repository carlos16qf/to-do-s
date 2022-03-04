const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const dataBase = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  puerto: 5432,
  database: process.env.DB,
  dialect: 'postgres'
});

module.exports = { dataBase };
