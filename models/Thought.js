// Importing required modules
const mongoose = require('mongoose');
const reactionSchema = require('./Reaction'); // Ensure that this exports a schema, not a model

// Defining the thought schema
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal) // Use a getter method to format the timestamp on query
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    reactions: [reactionSchema] // Using the reactionSchema directly
}, {
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
});

// Defining a virtual property to get the reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Creating the Thought model using the thought schema
const Thought = mongoose.model('Thought', thoughtSchema);

// Exporting the Thought model
module.exports = Thought;