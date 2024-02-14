// Importing the required modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Mounting the API routes
router.use('/api', apiRoutes);

// Handling 404 errors
router.use((req, res) => {
    res.status(404).send('<h1> 404 Error!</h1>')
});

// Exporting the router module
module.exports = router;
