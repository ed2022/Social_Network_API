const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThoughts, 
  updateThought,
  deleteThought,
  addReaction, 
  deleteReaction,
} = require('../../controllers/thoughtController');

// Using syntax from mini-p for all the routes to stick to one line by calling the ROUTE 
// /api/students/:studentId/assignments/:assignmentId
//router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

//GET/api/thoughts - we want to be able to display and creat to the thought route 
router.route('/').get(getThoughts).post(createThoughts);

//To the following of get/put/delete- /:thoughtId 
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//Lastly we are going to delete/add reaction by reactionId
router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;











