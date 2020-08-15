const path = require('path');

require('dotenv').config(path.join(__dirname, 'ENV_VARS.env'));

module.exports = {
  MAILJET_API_KEY: process.env.MAILJET_API_KEY,
  MAILJET_SECRET: process.env.MAILJET_SECRET,
  MAILER_FROM_EMAIL: process.env.MAILER_FROM_EMAIL,
  MAILER_FROM_NAME: process.env.MAILER_FROM_NAME,
  MAILER_TO_EMAIL: process.env.MAILER_TO_EMAIL,
  MAILER_TO_EMAIL2: process.env.MAILER_TO_EMAIL2,
  MAILER_TO_EMAIL3: process.env.MAILER_TO_EMAIL3,
  PORT: process.env.PORT,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_USERNAME_PASS: process.env.MONGO_USERNAME_PASS
}