
const makeAddArtikel = (createArticle, getPayloadJwt, createArtikelValidation, validate) => {
  return async function createArtikel({ headers, body }) {
    validate(createArtikelValidation, body);
    const jwtPayload = getPayloadJwt(headers);
    const { title, description } = body;
    const { email } = jwtPayload;
    const artikel = await createArticle(email, title, description);
    return artikel;
  };
};

module.exports = makeAddArtikel;
