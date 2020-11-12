const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// import routes
const questionRoute = require('./api/routes/question');
const recentlyAskedRoute = require('./api/routes/recentlyAsked');

app.use('/question', questionRoute);
app.use('/recentlyAsked', recentlyAskedRoute);


// ROUTES
app.get('/', (req, res) => {
	res.send('We are on home');
});



// Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
	() => console.log('Connected to db!')
);

// listening
app.listen(process.env.PORT || 5000);

app.listen(5000);
