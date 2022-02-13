const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser, 
  updateUser,
  deleteUser, 
  addFriend, 
  removeFriend,
} = require('../../controllers/userController');

// Using syntax from mini-p for all the routes to stick to one line by calling the ROUTE 
// /api/students/:studentId/assignments/:assignmentId
//router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

//GET/api/users - we want to be able to display and creat to the user route 
router.route('/').get(getUsers).post(createUser);

//To the following of get/put/delete- /:userId 
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//Lastly we are going to delete/add friend by friend Id
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;

