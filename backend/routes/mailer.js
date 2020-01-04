const express = require('express');
const router = express.Router();
const mailer = require('../services/mailer');
const config = require('../config/config')

router.post('/', function(req, res, next) {
    mailer(req.body);
    res.status(200).send('email sent');
});

module.exports = router;