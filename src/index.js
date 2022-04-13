const app = require('./app');
const sequelize = require('./database');
const port = 3000;

// Data Base connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, async () => {});
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
