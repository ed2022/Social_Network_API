const { Schema, model } = require('mongoose');

// Schema to create a course model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email:{
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/, //taking any str in from of the @ and building out the email addy joe - gmail - com
    },
    thoughts:[//require multi~ 
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

usersSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Users = model('Users', usersSchema);
//exporting 
module.exports = Users;
