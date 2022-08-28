const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const cartRoutes = require('./cartRoutes')

router.use('/', homeRoutes);
router.use('/', apiRoutes);
router.use('/', cartRoutes)

module.exports = router;