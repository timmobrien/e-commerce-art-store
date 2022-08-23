const router = require('express').Router();

const userRoutes = require('./userRoutes');
const checkoutRoutes = require('./checkoutRoutes')
router.use('/', userRoutes);
router.use('/', checkoutRoutes)

module.exports = router;