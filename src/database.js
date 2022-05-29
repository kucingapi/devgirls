const Sequelize = require('sequelize');

const dotenv = require('dotenv') || {};

const env = dotenv.config().parsed;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = env || process.env;

const nodeEnv = process.env.NODE_ENV.trim();

let dialectOptions = {};
let logging = false;

if (nodeEnv === 'production') {
  dialectOptions = {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  };
}

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  dialectOptions,
  define: {
    freezeTableName: true,
  },
  logging
});

module.exports = { sequelize, Sequelize };
