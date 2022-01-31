const router = require('express').Router();

const {
  getUsers,
  getSingleUsers,
  createUsers, 
  updateUsers,
  deleteUsers,
} = require('../../controllers/userController');

//GET/api/Users
router.get('/', getUsers);

//GET by user/api/Users/:studentId 
router.get('/:usersId', getSingleUsers);

//POST/api/Users/:usersID 
router.post('/', createUsers);

//PUT by id/api/Users/:userId/assignments
router.put('/:usersId', updateUsers);

//DELETE by id/api/Users/:userId/assignments/:assignmentId
router.delete('/:usersId',deleteUsers);

module.exports = router;
