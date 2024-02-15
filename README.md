# Social Network API

## Description
This project is a backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The API is built with Node.js and Express.js, using MongoDB as a NoSQL database with Mongoose as the ODM, efficiently handling large amounts of unstructured data.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Routes](#routes)
4. [Models](#models)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:

npm install

This will install Express.js for the server and Mongoose for database management.

## Usage
To start the application, run:

npm start

This will start the server and connect to the MongoDB database.

## Routes
This API includes the following routes:

/api/users for accessing user data:

GET all users
GET a single user by ID
POST a new user
PUT to update a user by ID
DELETE to remove a user by ID
/api/users/:userId/friends/:friendId for managing user friends:

POST to add a new friend to a user's friend list
DELETE to remove a friend from a user's friend list
/api/thoughts for accessing thoughts data:

GET all thoughts
GET a single thought by ID
POST a new thought
PUT to update a thought by ID
DELETE to remove a thought by ID
/api/thoughts/:thoughtId/reactions for managing reactions to thoughts:

POST to create a reaction
DELETE to remove a reaction


## Models
The API uses the following Mongoose models:

User with fields for username, email, thoughts, and friends.
Thought with fields for thoughtText, createdAt, username, and reactions.
Reaction as a subdocument schema in the Thought model for reactions.

## Contributing
If you would like to contribute to this project, please fork the repository and then submit a pull request with your changes.

## Tests
Testing is conducted manually using Insomnia. To perform tests on the API routes:

Install Insomnia or any other API testing tool.
Start the server with npm start.
Use Insomnia to test each route for GET, POST, PUT, and DELETE requests.
Video demonstrations of tests can be found here:

Test Demonstration for User Routes (link-to-user-routes-test-video)
Test Demonstration for Thought Routes (link-to-thought-routes-test-video)
Test Demonstration for Reaction Routes (link-to-reaction-routes-test-video)

## Questions
If you have any questions about the repo, open an issue or contact me directly at Zackseriousemail@gmail.com. You can find more of my work at HackDehZack (https://github.com/HackDehZack).
