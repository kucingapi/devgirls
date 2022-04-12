const app = require("./app");
const sequelize = require("./database");
const port = 3000;

app.listen(port, async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
});