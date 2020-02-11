const mailer = require('../services/mailer');
const Guest = require('../models/guest');

async function register(req, res, next) {
    try {
        const guest = await Guest.create( req.body );
        mailer(req.body);
        res.status(201).send({ guest });
    } catch(err) {
        res.status(400).send(err);
    }
};

module.exports = { register, Guest }