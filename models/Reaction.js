// Importing the mongoose library
const mongoose = require('mongoose');

// Creating a reaction schema
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Typpes.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal) // Assuming dateFormat is defined elsewhere
    }
});

// Creating a Reaction model using the reaction schema
const Reaction = mongoose.model('Reaction', reactionSchema);

// Exporting the Reaction model
module.exports = Reaction;