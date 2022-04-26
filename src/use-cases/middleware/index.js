const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { UseCaseError } = require('../../entities/error');
const makeAuth = require('./auth');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env;

const auth = makeAuth(jwt, UseCaseError, TOKEN_SECRET);

const authService = Object.freeze({auth});

module.exports = authService;
module.exports = {auth};
