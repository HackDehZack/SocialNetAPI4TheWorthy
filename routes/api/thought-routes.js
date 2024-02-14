// Importing the required dependencies and functions
const router = require("express").Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller");

// Defining the routes for handling thoughts
router.route("/")
    .get(getAllThought) // Route for getting all thoughts
    .post(createThought); // Route for creating a new thought

router.route("/:id")
    .get(getThoughtById) // Route for getting a specific thought by its id
    .put(updateThought) // Route for updating a specific thought by its id
    .delete(deleteThought); // Route for deleting a specific thought by its id

router.route("/:thoughtId/reactions")
    .post(addReaction); // Route for adding a reaction to a specific thought

router.route("/:thoughtId/reactions/:reactionId")
    .delete(removeReaction); // Route for removing a reaction from a specific thought

module.exports = router; // Exporting the router for use in other files
