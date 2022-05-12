
const makeGetAcaraFromAnggota = (
  findAnggotaById,
  sequelizeErrorHandler,
  UseCaseError,
  getPayloadJwt,
  userValidation,
  validate
) => {
  return async function getAcaraFromAnggota({ headers }) {
    validate(userValidation, headers);
    const payload = getPayloadJwt(headers);
    const { id } = payload;
    const user = await findAnggotaById(id).catch(sequelizeErrorHandler);
    const acara = await user.getAcaras();
    if (acara === null) {
      throw new UseCaseError(404, 'acara not found');
    }
    return acara;
  };
};

module.exports = makeGetAcaraFromAnggota;
