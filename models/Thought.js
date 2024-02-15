// Importing required modules
const { Schema, model, Types } = require('mongoose');
const dateFormat = require("../utils/dateFormat.js");

// Reaction schema for storing reactions on thoughts
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true, // Reaction body is required
            maxlength: 280, // Maximum length of reaction body is 280 characters
        },
        username: {
            type: String,
            required: true, // Username is required
        },
        createdAt: {
            type: Date, 
            default: Date.now, // Default value is the current date and time
            get: (timestamp) => dateFormat(timestamp), // Custom getter function to format the date
        },
    },
    {
        toJSON: {
            getters: true, // Include getters when converting to JSON
        },
        id: false, // Exclude the 'id' field from the document
    }
);

// Thought schema for storing thoughts and their reactions
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Thought is Required", // Thought text is required
            minlength: 1, // Minimum length of thought text is 1 character
            maxlength: 280, // Maximum length of thought text is 280 characters
        },
        createdAt: {
            type: Date, 
            default: Date.now, // Default value is the current date and time
            get: (timestamp) => dateFormat(timestamp), // Custom getter function to format the date
        },
        username: {
            type: String,
            required: true, // Username is required
        },
        reactions: [ReactionSchema], // Array of reactions associated with the thought
    },
    {
        toJSON: {
            virtuals: true, // Include virtual properties when converting to JSON
            getters: true, // Include getters when converting to JSON
        },
        id: false, // Exclude the 'id' field from the document
    }
);

// Virtual property to get the count of reactions on a thought
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// Export the Thought model
module.exports = Thought;