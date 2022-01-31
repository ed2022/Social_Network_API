const {Thoughts, Users} = require('../models');

module.exports = {
  // Get all Thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thoughts
  getSingleThoughts(req, res) {
    Thoughts.findOne({ _id: req.params.id })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thoughts
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a thoughts
  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtsId },
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
  deleteThoughts(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtsId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : Student.deleteMany({ _id: { $in: thoughts.students } })
      )
      .then(() => res.json({ message: 'Thoughts and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
   // Create a thoughts
  createReactions(req, res) {
    Reaction.create(req.body)
      .then((reactions) => res.json(reactions))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
 // Delete a thoughts
  deleteReactions(req, res) {
    Reactions.findOneAndDelete({ _id: req.params.reactionId })
      .then((reactions) =>
        !reactions
          ? res.status(404).json({ message: 'No reactions with that ID' })
          : Reactions.deleteMany({ _id: { $in: reactions.students } })
      )
      .then(() => res.json({ message: 'Reactions are deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
