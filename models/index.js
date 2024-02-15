// Purpose: This file will import the User and Thought models and export them as an object so we can easily access them in other parts of thou application.
const Thought = require('./Thought');
const User = require('./User');

const Reaction = require('./Reaction');


// Export the models
module.exports = { Thought, User };