// Importing the required modules
const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// Mounting the thought routes and user routes on the router
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

// Exporting the router
module.exports = router;
