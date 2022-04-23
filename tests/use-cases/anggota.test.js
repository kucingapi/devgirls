const { Anggota } = require('../../src/entities');
const {
  registerAnggota,
  loginAnggota,
} = require('../../src/use-cases/anggota');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const { TOKEN_SECRET } = env;

describe('register anggota use cases', () => {
  let idAnggota;
  let newAnggota;

  beforeAll(async () => {
    const anggota = await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    idAnggota = anggota.body.id;
    newAnggota = await Anggota.findByPk(idAnggota);
  });

  afterAll(async () => {
    await Anggota.destroy({
      where: {
        id: idAnggota,
      },
    });
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
  let idAnggota, newAnggota, loggedAnggota;

  beforeAll(async () => {
    const anggota = await registerAnggota({
      body: {
        nama: 'novel',
        email: 'test2@mail.com',
        password: '12345',
      },
    });
    idAnggota = anggota.body.id;
    newAnggota = await Anggota.findOne({ where: { id: idAnggota } });
    loggedAnggota = await loginAnggota({
      body: {
        email: 'test2@mail.com',
        password: '12345',
      },
    });
  });

  afterAll(async () => {
    await newAnggota.destroy();
  });

  it('should throw an error when password is less than 5 character', async () => {
    let error = false;
    await loginAnggota({
      body: {
        email: 'test@mail.com',
        password: '1234',
      },
    }).catch((e) => {
      error = e.message.toString().trim();
    });
    expect(error).toEqual(
      '"password" length must be at least 5 characters long'
    );
  });

  it('should give header with jwt', async () => {
    const { data } = loggedAnggota.header;
    expect(typeof data).toEqual('string');
  });

  it('should have verifiable jwt', async () => {
    const { data } = loggedAnggota.header;
    let verified = false;
    verified = jwt.verify(data, TOKEN_SECRET);

    expect(typeof verified).toEqual('object');
  });
});
