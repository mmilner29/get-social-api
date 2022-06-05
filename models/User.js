const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You must have a username',
        trim: true
    },
    email: {
        type: String,
        required: 'You must have an email',
        unique: true,
        //simple regex for checking a valid email format
        match: [/^\S+@\S+\.\S+$/]
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
      virtuals: true
    },
    id: false,
  }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//this creates the User model using the UserSchema!
const User = model('User', UserSchema);

//don't forget to export the User model
module.exports = User;