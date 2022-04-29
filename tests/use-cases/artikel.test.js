const { registerAnggota } = require('../../src/controllers/anggota.controller');
const { Anggota, Artikel } = require('../../src/entities');
const { loginAnggota } = require('../../src/use-cases/anggota');
const { createArtikel } = require('../../src/use-cases/artikel');

describe('artikel use cases', () => {
  let idAnggota;

  beforeAll(async () => {
    const anggota = await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    idAnggota = anggota.body.id;
    await Anggota.findByPk(idAnggota);
  });

  afterAll(async () => {
    await Anggota.destroy({
      where: {
        id: idAnggota,
      },
    });
  });

  it('should return artikel', async () => {
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data;
    const artikel = await createArtikel({
      header: { authToken: token },
      body: { title: 'ini adalah title', description: 'ini adalah deskripsi' },
    });
    expect(artikel instanceof Artikel).toBeTruthy();
  });

  it('should return error when the body not rigth', async () => {
    let error = false;
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data;
    await createArtikel({
      header: { authToken: token },
      body: {},
    }).catch((e) => {
      error = true;
    });
    expect(error).toBeTruthy();
  });
});
