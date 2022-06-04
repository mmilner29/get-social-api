const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //async function, if false Mongoose will consider a validation error
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
          }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//this creates the User model using the UserSchema!
const User = model('User', UserSchema);

//don't forget to export the User model
module.exports = User;