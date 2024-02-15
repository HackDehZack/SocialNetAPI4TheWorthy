const mongoose = require('mongoose');


  // Connects to MongoDB database
 
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;



//await is being used to wait for the connection to be established before moving on to the next line of code. 
//This is because the connect method returns a promise, and using await here is a way to handle 
//the promise without using .then and .catch.