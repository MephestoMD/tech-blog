const router = require('express').Router();

const homeRoutes = require('./home-routes');

// router.use('/api',apiRoutes);
router.use('/', homeRoutes);

module.exports = router;