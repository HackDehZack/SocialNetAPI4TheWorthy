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

Test demonstration for seeding/starting the server [seedandserver.webm](https://github.com/HackDehZack/SocialNetAPI4TheWorthy/assets/140559436/088b5afb-a7c4-499e-86cc-dd0cde563967)

Test Demonstration for User Routes [UserRoutes.webm](https://github.com/HackDehZack/SocialNetAPI4TheWorthy/assets/140559436/12a9496f-fbdd-4251-9ce2-cc2fb2831cbe)

Test Demonstration for Thought Routes [ThoughtRoutes.webm](https://github.com/HackDehZack/SocialNetAPI4TheWorthy/assets/140559436/938577c1-b956-4c9c-bb00-af3708f2e3e8)

Test Demonstration for Reaction Routes [Reactions.webm](https://github.com/HackDehZack/SocialNetAPI4TheWorthy/assets/140559436/6bfd0daa-154f-4c6b-b774-d574eea38f5d)

Test Demonstration for Friend Routes [Friends.webm](https://github.com/HackDehZack/SocialNetAPI4TheWorthy/assets/140559436/f48249af-fd37-4d55-82bb-bf39568a3c38)



## Questions
If you have any questions about the repo, open an issue or contact me directly at Zackseriousemail@gmail.com. You can find more of my work at HackDehZack (https://github.com/HackDehZack).
