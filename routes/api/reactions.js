const router = require('express').Router();

const {
  createReactions, 
  deleteReactions,
} = require('../../controllers/thoughtController');

//POST by id/api/users/:userId/reactions/:friendId
router.post('/:thoughtsID/reactions' , createReactions);

//DELETE by id/api/users/:userId/reactions/:friendId
router.delete('/:thoughtsID/reactions',deleteReactions);

module.exports = router;