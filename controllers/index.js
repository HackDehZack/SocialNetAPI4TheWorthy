// Importing the thoughtController module from the './thoughtController' file
const thoughtController = require('./thoughtController');

// Importing the userController module from the './userController' file
const userController = require('./userController');

// Exporting an object that contains the thoughtController and userController modules
module.exports = {
  thoughtController,
  userController
};