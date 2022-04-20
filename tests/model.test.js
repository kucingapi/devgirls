const { anggota } = require('../src/entities');

describe('Anggota Model', () => {
  let newAnggota;
  beforeEach(async () => {
    newAnggota = await anggota.create({
      namaAnggota: 'test',
      email: 'novel@gmail.com',
      password: '12345',
    });
  });

  afterEach(async () => {
    await newAnggota.destroy();
  });

  it('should create 1 data', async () => {
    const createdAnggota = await anggota.findByPk(newAnggota.id);
    expect(createdAnggota).not.toEqual(null);
    expect(typeof createdAnggota).toBe('object');
  });

  it('can be updated', async () => {
    newAnggota.nama = 'change';
    await newAnggota.save();
    expect(newAnggota.nama).toEqual('change');
  });
});
