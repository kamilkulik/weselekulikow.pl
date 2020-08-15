const express = require('express');
const mailerController = require('../controllers/mailer');

const router = express.Router();

router.post('/email', mailerController.register);

router.get('/email', (req, res, next) => {
  res.status(201).send('request received');
})

module.exports = router;