const sequelize = require('../src/database');

describe('Database Connection Test', () => {
  it('should not throw an error when connecting', async () => {
    let error = false;
    try {
      await sequelize.authenticate();
    } catch (err) {
      error = err;
    }
    expect(error).toBeFalsy();
  });
});
