const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { UseCaseError } = require('../entities/error');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env;

const getPayloadJwt = (header) => {
  const authToken = header.authToken;
  if (!authToken) throw new UseCaseError(401, 'Unauthorized');
  const authArray = authToken.split(' ');
  const token = authArray[authArray.length - 1];
  try {
    const jwtPayload = jwt.verify(token, TOKEN_SECRET);
    return jwtPayload;
  } catch (e) {
    throw new UseCaseError(401, 'Unauthorized');
  }
};

module.exports = getPayloadJwt;
