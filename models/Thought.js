// Importing required modules
const mongoose = require('mongoose');
const Reaction = require('./Reaction');

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
    reactions: [Reaction.schema]
}, { toJSON: { virtuals: true }, id: false });

// Defining a virtual property to get the reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Creating the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

// Exporting the Thought model
module.exports = Thought;