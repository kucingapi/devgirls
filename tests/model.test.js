const { Anggota, Acara, Kategori, Artikel } = require('../src/entities');

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
    const anggota = await Anggota.findByPk(1);
    expect(manyAcara).toEqual(1);
  });

  it('should has many to many relation with anggota', async () => {
    await newAcara.addAnggota(newAnggota);
    const anggotaAcara = await newAcara.getAnggota();
    expect(anggotaAcara).not.toEqual(null);
    expect(typeof anggotaAcara).toBe('object');
  });

  it('should has many to many relation with kategori', async () => {
    const newKategori = await Kategori.create({label: "ui/ux"});
    await newAcara.addKategori(newKategori);
    const kategoriAcara = await newAcara.countKategoris();
    expect(kategoriAcara).toEqual(1);
  });
});

describe('Artikel Model', () => {
  let newAnggota, newArtikel;
  beforeEach(async () => {
    newAnggota = await Anggota.create({
      namaAnggota: 'test',
      email: 'novel@gmail.com',
      password: '12345',
    });
    newArtikel = await Artikel.create({
      judulArtikel: 'test',
      deskripsiArtikel: 'ini adalah artikel',
      fotoArtikel: 'test'
    });
  });

  afterEach(async () => {
    await newAnggota.destroy();
    await newArtikel.destroy();
  });

  it('should create 1 data', async () => {
    const createdArtikel = await Artikel.findByPk(newArtikel.id);
    expect(createdArtikel).not.toEqual(null);
    expect(typeof createdArtikel).toBe('object');
  });

  it('should has many to 1 realtion with user', async () => {
    await newAnggota.addArtikel(newArtikel);
    const manyArtikel = await newAnggota.countArtikels();
    expect(manyArtikel).toEqual(1);
  });
})