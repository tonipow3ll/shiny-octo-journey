const router = require('express').Router();
// const apiRoutes = require('./api');
const login = require('./login');

// router.use('/api', apiRoutes);
router.use('/login', login);

module.exports = router;