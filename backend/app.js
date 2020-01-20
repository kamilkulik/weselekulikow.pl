const express = require('express');
const path = require('path');
const cors = require('cors');

const emailSender = require('./routes/mailer');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/email', emailSender);

module.exports = app;
