const router = require('express').Router();

const {
  createFriends, 
  deleteFriends,
} = require('../../controllers/userController');


//POST by id/api/Users/:userId/friends/:friendId
router.post('/:usersID/friends/:friendId', createFriends);

//DELETE by id/api/Users/:userId/friends/:friendId
router.delete('/:usersId/friends/:friendId',deleteFriends);

module.exports = router;
