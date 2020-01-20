const express = require('express');
const router = express.Router();
const mailer = require('../services/mailer');
const Guest = require('../models/guest');

router.post('/', async function(req, res, next) {
    try {
        const newGuest = await Guest.create( req.body );
        mailer(req.body);
        res.status(200).send({ newGuest });
    } catch(err) {
        res.status(400).send(err);
    }
    
});

module.exports = router;