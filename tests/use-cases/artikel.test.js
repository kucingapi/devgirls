const { registerAnggota } = require('../../src/controllers/anggota.controller');
const { Anggota, Artikel } = require('../../src/entities');
const { loginAnggota } = require('../../src/use-cases/anggota');
const { addArtikel, removeArtikel } = require('../../src/use-cases/artikel');

describe('add artikel use cases', () => {
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
    const artikel = await addArtikel({
      headers: { authToken: token },
      body: { title: 'ini adalah title', description: 'ini adalah deskripsi' },
    });
    expect(artikel instanceof Artikel).toBeTruthy();
  });

  it('should return error when the body is not rigth', async () => {
    let error = false;
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data;
    await addArtikel({
      headers: { authToken: token },
      body: {},
    }).catch(() => {
      error = true;
    });
    expect(error).toBeTruthy();
  });
});

describe('remove artikel use cases', () => {
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
  it('should return artikel id', async () => {
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data;
    const artikel = await addArtikel({
      headers: { authToken: token },
      body: { title: 'ini adalah title', description: 'ini adalah deskripsi' },
    });
    const id = await removeArtikel({
      headers: { authToken: token },
      body: { id: artikel.id },
    });
    expect(typeof id).toBe('number');
  });
});
