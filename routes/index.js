// This file defines the main router for the application

const express = require('express');
const router = express.Router();
const usersRouter = require('./user-routes');
const thoughtsRouter = require('./thought-routes');

// Mount the users router under the '/users' path
router.use('/users', usersRouter);

// Mount the thoughts router under the '/thoughts' path
router.use('/thoughts', thoughtsRouter);

module.exports = router;