const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose
	.connect(
		`mongodb+srv://${dbUser}:${dbPassword}@nodeexpressprojects.rwyie.mongodb.net/url-shortener?retryWrites=true&w=majority`,
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log('Connected to MongoDB!');
	})
	.catch((error) => {
		console.log('Failed to connect to MongoDB: ', error);
		process.exit(1);
	});
