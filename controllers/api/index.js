const router = require('express').Router();
const userRoutes = require('./userController');
const interestRoutes = require('./interestController');

router.use('/users', userRoutes);
router.use('/interests', interestRoutes);

module.exports = router;