const router = require('express').Router();
// const apiRoutes = require('./api');
const login = require('./login');
const api = require('./location')

router.use('/login', login);
router.use('/api', api)

module.exports = router;