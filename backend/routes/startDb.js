const express = require('express');
const startDb = require('../controllers/startDb');

const router = express.Router();

router.get('/db', startDb);

module.exports = router;