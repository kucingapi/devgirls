
const makeAddArtikel = (createArticle, getPayloadJwt, addArtikelValidation, validate) => {
  return async function addArtikel({ headers, body }) {
    validate(addArtikelValidation, body);
    const jwtPayload = getPayloadJwt(headers);
    const { title, description } = body;
    const { email } = jwtPayload;
    const artikel = await createArticle(email, title, description);
    return artikel;
  };
};

module.exports = makeAddArtikel;
