const makeRemoveAcara = (
  deleteAcara,
  UseCaseError,
  removeArtikelValidation,
  validate
) => {
  return async function removeAcara({ body }) {
    validate(removeArtikelValidation, body);
    const { id } = body;
    const deleted = await deleteAcara(id);
    if (deleted < 1) throw new UseCaseError(404, 'acara is not found');
    return id;
  };
};

module.exports = makeRemoveAcara;
