const makeRegisterAnggota = (
  bcrypt,
  register,
  validate,
  sequelizeErrorHandler,
  createAnggota
) => {
  return async function registerAnggota({ body }) {
    validate(register, body);
    const { nama, email, password } = body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const anggota = await createAnggota(nama, email, hashedPassword).catch(
      sequelizeErrorHandler
    );
    return anggota;
  };
};
module.exports = makeRegisterAnggota;
