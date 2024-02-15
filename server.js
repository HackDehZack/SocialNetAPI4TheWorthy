// Importing the required modules
const express = require('express');
const connectDB = require('./config/db.js');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Parsing JSON data in the request body
app.use(express.json());

// Connecting to the database
connectDB();

// Setting up the API routes
app.use('/api', routes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});