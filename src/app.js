const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
