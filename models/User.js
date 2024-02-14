const { Schema, model } = require("mongoose");

// Define the UserSchema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: "Username is Required",
    },
    email: {
        type: String,
        unique: true,
        required: "Username is Required",
        match: [/.+@.+\..+/], // Validate email format using regex
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// Define a virtual property "friendCount" to get the number of friends
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Create the User model using the UserSchema
const User = model("User", UserSchema);

// Export the User model
module.exports = User;
