const Sequelize = require('sequelize');

const dotenv = require('dotenv') || {};

const env = dotenv.config().parsed || process.env;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = env || process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
  logging: false,
});

module.exports = { sequelize, Sequelize };
