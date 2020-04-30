const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const Sequelize = require('sequelize');
const layout = require('./views/layout');
const app = express();

const { db } = require('./models');
const models = require('./models');
const user = require('./routes/user');
const wiki = require('./routes/wiki');


db.authenticate()
.then(() => {
  console.log('connected to database')
})


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wiki);
app.use('/user', user);


app.get('/', (req, res) => {
  res.send(layout());
});


const init = async () => {
  await models.db.sync({force: true});

  const PORT = 3000;

  app.listen(PORT, () => {
  console.log(`We are listening on ${PORT}, hoorah!`);
});
}

init();






