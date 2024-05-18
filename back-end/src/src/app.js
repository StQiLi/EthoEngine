const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const indexRouter = require('./routes/index');

// Use routes
app.use('/', indexRouter);

module.exports = app;