const Sequelize = require('sequelize');

const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

module.exports = { sequelize, Sequelize };
