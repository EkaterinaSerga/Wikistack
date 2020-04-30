const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const Sequelize = require('sequelize');
const layout = require('./views/layout')

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(layout());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`We are listening on ${PORT}, hoorah!`);
});


