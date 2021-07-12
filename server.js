require('dotenv').config();

const app = require('./app.js');

const port = process.env.PORT;

app.listen(
	port,
	() =>
	{
		console.log('server.js Listening on port ', port);
	}
)
