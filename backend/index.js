const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require('./config/db');

// Routes
app.use('/api/v1', require('./routes/posts'));
app.use('/api/v1', require('./routes/auth'));
app.use('/api/v1', require('./routes/features'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Server is listening at port ' + PORT);
});
