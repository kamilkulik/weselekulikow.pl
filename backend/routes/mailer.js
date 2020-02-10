const express = require('express');
const mailerController = require('../controllers/mailer');

const router = express.Router();

router.post('/email', mailerController.register);

module.exports = router;