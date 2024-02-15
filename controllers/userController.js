// Importing the User and Thought models
const { User } = require('../models');
const { Thought } = require('../models');

// Defining the userController object
const userController = {
  // Function to get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find(); // Find all users
      res.json(users); // Send the users as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  },
  // Function to get a user by their ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId).populate('thoughts').populate('friends'); // Find a user by their ID and populate their thoughts and friends
      if (!user) {
        return res.status(404).json({ message: "User not found. Maybe they're hiding in the Upside Down?" }); // Send a 404 response if the user is not found
      }
      res.json(user); // Send the user as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  },
  // Function to create a new user
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body); // Create a new user with the data from the request body
      res.status(201).json(newUser); // Send the newly created user as a JSON response with a 201 status code
    } catch (error) {
      res.status(400).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  },
  // Function to update a user
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true }); // Find a user by their ID and update their data with the data from the request body
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found. They might have vanished into thin air!" }); // Send a 404 response if the user is not found
      }
      res.json(updatedUser); // Send the updated user as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  },
  // Function to delete a user
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId); // Find a user by their ID and delete them
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found. They must have escaped to another dimension!" }); // Send a 404 response if the user is not found
      }
      await Thought.deleteMany({ _id: { $in: deletedUser.thoughts } }); // Delete all thoughts associated with the deleted user
      res.json({ message: "User deleted successfully. They won't be able to post any more memes!" }); // Send a success message as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  },
  // Function to add a friend to a user
  addFriend: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId); // Find a user by their ID
      if (!user) {
        return res.status(404).json({ message: "User not found. Maybe they're too cool for friends?" }); // Send a 404 response if the user is not found
      }
      user.friends.push(req.params.friendId); // Add the friend's ID to the user's friends array
      await user.save(); // Save the updated user
      res.json(user); // Send the updated user as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  },
  // Function to remove a friend from a user
  removeFriend: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId); // Find a user by their ID
      if (!user) {
        return res.status(404).json({ message: "User not found. Maybe they're not ready to let go?" }); // Send a 404 response if the user is not found
      }
      user.friends.pull(req.params.friendId); // Remove the friend's ID from the user's friends array
      await user.save(); // Save the updated user
      res.json(user); // Send the updated user as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Oops! Something went wrong. Please try again later." }); // Send an error message if something goes wrong
    }
  }
};


module.exports = userController; 
// Export the userController object