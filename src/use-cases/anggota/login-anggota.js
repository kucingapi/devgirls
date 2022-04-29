const makeLoginAnggota = (
  bcrypt,
  login,
  validate,
  sequelizeErrorHandler,
  findAnggota,
  UseCaseError,
  jwt,
  TOKEN_SECRET
) => {
  return async function loginAnggota({ body }) {
    validate(login, body);
    const { email, password } = body;
    const anggota = await findAnggota(email).catch(sequelizeErrorHandler);
    if (anggota.length == 0) throw new UseCaseError(404, 'user doesnt exist');
    const validPassword = await bcrypt.compare(password, anggota.password);
    if (!validPassword) throw new UseCaseError(400, 'password is wrong');
    const token = jwt.sign(
      {
        id: anggota.id,
        email: anggota.email,
        nama: anggota.nama,
        role: anggota.jenisAnggota
      },
      TOKEN_SECRET
    );

    const header = {
      name: 'auth-token',
      data: token,
    };
    return { header };
  };
};
module.exports = makeLoginAnggota;
