const express = require('express');
const router = express.Router();
const mailer = require('../services/mailer');

router.post('/', function(req, res, next) {
    mailer(req.body);
    res.status(200).send('email sent');
});

module.exports = router;