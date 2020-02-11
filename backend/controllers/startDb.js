async function startDb(req, res, next) {
    try {
      require('../database/database');
        res.status(200).send('db connected')
    } catch(err) {
        res.status(400).send(err);
    }
};

module.exports = startDb;