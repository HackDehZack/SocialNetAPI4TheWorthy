const express = require('express');
const router = express.Router();

const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction }
 = require('../controllers/thoughtController'
 );

// Define routes
router.get('/', getAllThoughts);
router.get('/:thoughtId', getThoughtById);
router.post('/', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);
router.post('/:thoughtId/reactions', addReaction);
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

// Export router
module.exports = router;