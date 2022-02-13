const {Thoughts, Users} = require('../models');
const Thought = require('../models/Thoughts');

module.exports = {
  // Get all Thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .select('-__v')
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that Id' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thoughts
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thoughts) => {
          return Users.findOneAndUpdate(
            { _id: body.userId },
            { $push: { thoughtText: thoughts.thoughtId } },
            { new: true }
          );
        })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No user with this Id' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Update a thoughts
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with this id!' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thoughts
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that Id' })
          : Student.deleteMany({ _id: { $in: thoughts.students } })
      )
      .then(() => res.json({ message: 'Thoughts was deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
   // Create a thoughts
  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with this id!' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thoughts
  deleteReaction(req, res){
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }
    )
    .then((thoughts) =>
      !thoughts
        ? res.status(404).json({ message: 'No thoughts with this id!' })
        : res.json(thoughts)
    )
    .catch((err) => res.status(500).json(err));
  }
};
 
