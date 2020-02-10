const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes/rootRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
