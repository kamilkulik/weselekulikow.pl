const { Router } = require('express');

const mailerRoute = require('./mailer');
const startDb = require('./startDb');

const router = Router();

router.use('/register', mailerRoute);
router.use('/startdb', startDb);

module.exports = router;
