const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');


// Use routes
app.use('/', indexRouter);
app.use('/api', authRouter);


module.exports = app;