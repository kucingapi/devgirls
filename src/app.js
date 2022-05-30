const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const router = require('./routes');
const fileUpload = require('express-fileupload');
const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

app.use(fileUpload());

// enable cors
app.use(cors());
app.options('*', cors());

app.post('/', (req,res) => {
  res.send(req.body);
});

app.use('/', router);

module.exports = app;
