
const makeGetAcaraById = (
  findAcaraById,
  sequelizeErrorHandler,
  UseCaseError,
  getPayloadJwt,
  getAcaraByIdValidation,
  validate
) => {
  return async function getAcaraById({ params, headers }) {
    validate(getAcaraByIdValidation, params);
    const { id } = params;
    let user = -1;
    if (headers.authToken) {
      const payload = getPayloadJwt(headers);
      user = payload.id;
    }
    const acara = await findAcaraById(id).catch(sequelizeErrorHandler);
    if (acara === null) {
      throw new UseCaseError(404, 'acara not found');
    }
    const registered = await acara.hasAnggota(user);
    return { ...acara.dataValues, registered };
  };
};

module.exports = makeGetAcaraById;
