const { Router } = require('express');

const mailerRoute = require('./mailer');

const router = Router();

router.use('/', mailerRoute);

module.exports = router;
