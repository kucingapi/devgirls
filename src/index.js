const { sequelize } = require('./entities/models');
const app = require('./app');
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV.trim();

// Data Base connection
app.listen(port, async () => {
  if (nodeEnv == 'sync') {
    await sequelize.sync({ force: true }).catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
  } else {
    await sequelize.authenticate().catch((error) => {
      console.error('Unable to connect to the database:', error);
    });
  }
});
