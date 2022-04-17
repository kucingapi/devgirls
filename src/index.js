const { sequelize } = require('./entities/models');
const app = require('./app');
const port = 3000;
const nodeEnv = process.env.NODE_ENV;

// Data Base connection
app.listen(port, async () => {
  if (nodeEnv == 'sync') {
    await sequelize.sync().catch((error) => {
      console.error('Unable to connect to the database:', error);
      return;
    });
  }
  else {
    await sequelize.authenticate().catch((error) => {
      console.error('Unable to connect to the database:', error);
      return;
    });
  }
});
