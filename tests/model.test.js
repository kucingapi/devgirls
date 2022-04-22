const { Anggota, Acara } = require('../src/entities');

describe('Anggota Model', () => {
  let newAnggota;
  beforeEach(async () => {
    newAnggota = await Anggota.create({
      namaAnggota: 'test',
      email: 'novel@gmail.com',
      password: '12345',
    });
  });

  afterEach(async () => {
    await newAnggota.destroy();
  });

  it('should create 1 data', async () => {
    const createdAnggota = await Anggota.findByPk(newAnggota.id);
    expect(createdAnggota).not.toEqual(null);
    expect(typeof createdAnggota).toBe('object');
  });

  it('can be updated', async () => {
    newAnggota.nama = 'change';
    await newAnggota.save();
    await newAnggota.reload();
    expect(newAnggota.nama).toEqual('change');
  });
});

describe('Acara Model', () => {
  let newAcara, newAnggota;
  beforeEach(async () => {
    newAnggota = await Anggota.create({
      namaAnggota: 'test',
      email: 'novel@gmail.com',
      password: '12345',
    });
    newAcara = await Acara.create({
      judulAcara: 'acara 1',
      deskripsiAcara: 'acara ini adalah',
      fotoAcara: 'htakljdfa',
      tanggalPendaftaran: new Date(),
      tanggalAcara: new Date(),
      poin: 200,
    });
  });

  afterEach(async () => {
    await newAcara.destroy();
    await newAnggota.destroy();
  });

  it('should create 1 data', async () => {
    const createdAcara = await Acara.findByPk(newAcara.id);
    expect(createdAcara).not.toEqual(null);
    expect(typeof createdAcara).toBe('object');
  });

  it('can be updated', async () => {
    newAcara.judulAcara = 'change';
    await newAcara.save();
    await newAcara.reload();
    expect(newAcara.judulAcara).toEqual('change');
  });

  it('can be add to anggota', async () => {
    await newAnggota.addAcaras([newAcara]);
    const manyAcara = await newAnggota.countAcaras();
    expect(manyAcara).toEqual(1);
  });
});
