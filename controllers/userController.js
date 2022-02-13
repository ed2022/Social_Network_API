const {Users} = require('../models');

const userController = {
  // Get all Users
  getUsers(req, res) {
    Users.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a users
  getSingleUser(req, res) {
    Users.findOne({ _id: req.params.userID })
      .select('-__v')
      .populate('thoughts')
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with that ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a users
  createUser(req, res) {
    Users.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a users
  updateUser(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.userID },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with this id!' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a users
  deleteUser(req, res) {
    Users.findOneAndDelete({ _id: req.params.userID })
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with that ID' })
          : Users.deleteMany({ _id: { $in: users.students } })
      )
      .then(() => res.json({ message: 'Users and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
   // Create a friends--Need more work
  addFriend(req, res) {
    Users.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a users
  removeFriend(req, res) {
    Users.findOneAndDelete({ _id: req.params.friendID })
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with that ID' })
          : Users.deleteMany({ _id: { $in: users.students } })
      )
      .then(() => res.json({ message: 'Users and friends are deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController; 