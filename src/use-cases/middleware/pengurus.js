const makePengurus = (jwt, UseCaseError, TOKEN_SECRET) => {
  return async function pengurus({ headers }) {
    const authToken = headers.authToken;
    if (!authToken) throw new UseCaseError(400, 'Unauthorized');
    const authArray = authToken.split(' ');
    const token = authArray[authArray.length - 1];
    try {
      const jwtPayload = jwt.verify(token, TOKEN_SECRET);
      const role = jwtPayload.role;
      if (role !== 'pengurus') throw new Error();
    } catch (e) {
      throw new UseCaseError(401, 'Unauthorized');
    }
  };
};

module.exports = makePengurus;
