// Import required modules
const express = require('express');
const connectDB = require('./config/db'); // Import the database connection configuration
const routes = require('./routes');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
connectDB();

// Use routes defined in the routes module
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});