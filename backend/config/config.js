const path = require('path');

require('dotenv').config(path.join(__dirname, 'ENV_VARS.env'));

module.exports = {
  MAILJET_API_KEY: process.env.MAILJET_API_KEY,
  MAILJET_SECRET: process.env.MAILJET_SECRET,
  MAILER_FROM_EMAIL: process.env.MAILER_FROM_EMAIL,
  MAILER_FROM_NAME: process.env.MAILER_FROM_NAME,
  MAILER_TO_EMAIL: process.env.MAILER_TO_EMAIL,
  PORT: process.env.PORT
}