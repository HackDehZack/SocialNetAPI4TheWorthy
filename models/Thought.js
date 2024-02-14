// Importing required modules
const { Schema, model, Types } = require('mongoose');

// Reaction schema for individual reactions on thoughts
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true, 
            maxlength: 280,
        },
        username: {
            type: String,
            required: true, 
        },
        createdAt: {
            type: Date, 
            default: Date.now, 
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false, 
    }
);

// Thought schema for storing thoughts and their reactions
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, "Thought is Required Please!"],
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date, 
            default: Date.now,
        },
        username: {
            type: String,
            required: true, 
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Virtual property to get the count of reactions on a thought
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Creating the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// Exporting the Thought model
module.exports = Thought;
