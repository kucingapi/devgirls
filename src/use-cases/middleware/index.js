const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { UseCaseError } = require('../../entities/error');

const makeAuth = require('./auth');
const makePengurus = require('./pengurus');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env;

const auth = makeAuth(jwt, UseCaseError, TOKEN_SECRET);
const pengurus = makePengurus(jwt, UseCaseError, TOKEN_SECRET);

const authService = Object.freeze({ auth, makePengurus });

module.exports = authService;
module.exports = { auth, pengurus };
