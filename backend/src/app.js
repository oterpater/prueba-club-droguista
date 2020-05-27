const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./db');

const clientRouter = require('./routes/client');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/client', clientRouter);

module.exports = app;