const router = require('express').Router();
const UserLoginRoutes = require('./UserLoginRoutes');

router.use('/user', UserLoginRoutes);

module.exports = router;