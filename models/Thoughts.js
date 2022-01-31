const { Schema, model } = require('mongoose');
const moment = require('moment');

const reactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, //MDB and sets renames the ID 
      default: () => new Types.ObjectId(), //id type
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,  
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    }
  }
);

// Schema to create thought Model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,  
      default: Date.now,
      get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false  
  }
);

const Thought = model('Thought', thoughtsSchema);

module.exports = Thought;
