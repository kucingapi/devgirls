const { Anggota } = require('../../src/entities');
const {
  registerAnggota,
  loginAnggota,
} = require('../../src/use-cases/anggota');

describe('register anggota use cases', () => {
  let idAnggota;
  let newAnggota;

  beforeAll(async () => {
    idAnggota = await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    newAnggota = await Anggota.findByPk(idAnggota.id);
  });

  afterAll(async () => {
    await newAnggota.destroy();
  });

  it('should make an anggota', async () => {
    expect(newAnggota).not.toEqual(null);
    expect(typeof newAnggota).toBe('object');
  });

  it('should throw an error when email is the same', async () => {
    let error = false;
    await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email@mail.com',
        password: 'passworrd',
      },
    }).catch((e) => {
      error = e.message.toString().trim();
    });
    expect(error).toEqual('email must be unique');
  });

  it('should throw an error when body is incorrect', async () => {
    let error = false;
    await registerAnggota({
      body: {},
    }).catch((e) => {
      error = e.message.toString().trim();
    });
    expect(error).toEqual('"email" is required');
  });

  it('should throw an error when password is less than 5 character', async () => {
    let error = false;
    await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email1@mail.com',
        password: '1234',
      },
    }).catch((e) => {
      error = e.message.toString().trim();
    });
    expect(error).toEqual(
      '"password" length must be at least 5 characters long'
    );
  });
});

describe('login anggota use cases', () => {
  it('should throw an error when password is less than 5 character', async () => {
    let error = false;
    const loggedAnggota = await loginAnggota({
      email: 'test@mail.com',
      password: '1234',
    }).catch((e) => {
      error = e.message.toString().trim();
    });
    expect(error).toEqual(
      '"password" length must be at least 5 characters long'
    );
  });
});
