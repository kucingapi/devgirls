const { createArticle } = require('../../data-access/artikel.db');
const getPayloadJwt = require('../../functions/getPayloadJwt');

const makeCreateArtikel = () => {
  return async function createArtikel({ header }) {
    const jwtPayload = getPayloadJwt(header);
    const { email } = jwtPayload;
    const artikel = await createArticle(email,"testasdfklj","tsdklfjdaesttt");
    return artikel;
  };
};

module.exports = makeCreateArtikel;
