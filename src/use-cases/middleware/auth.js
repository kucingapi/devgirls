const makeAuth = (jwt, UseCaseError, TOKEN_SECRET) => {
  return async function ({ headers }) {
    const authToken = headers.authToken;
    if (!authToken) throw new UseCaseError(400, 'Unauthorized');
    const authArray = authToken.split(' ');
    const token = authArray[authArray.length - 1];
    try {
      jwt.verify(token, TOKEN_SECRET);
    } catch (e) {
      throw new UseCaseError(401, 'Unauthorized');
    }
  };
};

module.exports = makeAuth;
