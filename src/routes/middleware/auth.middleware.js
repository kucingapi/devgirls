const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
const { UseCaseError } = require('../../entities/error');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env;

const auth = async ({ headers }) => {
  const authToken = headers.authToken;
	const authArray = authToken.split(' ');
	const token = authArray[authArray.length-1]
	try{
		jwt.verify(token, TOKEN_SECRET);
	}
	catch(e){
		throw new UseCaseError(401, "Unauthorized")
	}
};

module.exports = auth;
