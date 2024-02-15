// Importing the mongoose library
const mongoose = require('mongoose');

// Defining the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address']
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { 
    toJSON: { virtuals: true }, 
    id: false 
});

// Defining a virtual property 'friendCount' to get the number of friends
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Creating the User model using the user schema
const User = mongoose.model('User', userSchema);

// Exporting the User model
module.exports = User;