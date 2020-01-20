const mongoose = require('mongoose');
const config = require('../config/config');

mongoose
  .connect(config.MONGO_URI, {
    dbName: config.MONGO_DB_NAME,
    user: config.MONGO_USERNAME,
    pass: config.MONGO_USERNAME_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch(err => {
    console.error(err);
  })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', () => {
  console.log('Connected to db');
});
db.on('disconnected', () => {
  console.log('Disconnected from db');
})

module.exports = mongoose;