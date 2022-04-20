const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const router = require('./routes');
const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options('*', cors());

app.post('/', (req,res) => {
  res.send(req.body);
});

app.use('/', router);

module.exports = app;
