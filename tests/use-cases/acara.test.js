const { Acara } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const { addAcara } = require('../../src/use-cases/acara');

describe('add acara use case', () => {
  it('should throw an error when body is empty', async () => {
    let error = false;

    await addAcara({ body: {} }).catch((e) => {
      error = e;
    });

    expect(error instanceof UseCaseError).toBeTruthy();
  });
  it('should throw an error when the date is less than today', async () => {
    let error = false;

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const newAcara = await addAcara({
      body: {
        title: 'title',
        description: 'ini adalah suatu deskripsi',
        photo: 'link photo',
        registrationDate: yesterday,
        endDate: yesterday,
      },
    }).catch((e) => {
      error = e;
		});
    expect(error instanceof UseCaseError).toBeTruthy();
  });

  it('should create a new acara', async () => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const newAcara = await addAcara({
      body: {
        title: 'title',
        description: 'ini adalah suatu deskripsi',
        photo: 'link photo',
        registrationDate: tomorrow,
        endDate: tomorrow,
      },
    });
    expect(newAcara instanceof Acara).toBeTruthy();
		newAcara.destroy()
  });
});
