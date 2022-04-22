const { sequelize, Sequelize } = require('../../database');
const actor = require('./actor');
const movie = require('./movie');

const Movie = sequelize.define('movie', movie(Sequelize.DataTypes));
const Actor = sequelize.define('actor', actor(Sequelize.DataTypes));

Movie.belongsToMany(Actor, { through: 'actor_movies' });
Actor.belongsToMany(Movie, { through: 'actor_movies' });

module.exports = { sequelize, Sequelize };
