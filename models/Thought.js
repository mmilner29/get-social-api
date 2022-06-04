const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
          }
    ]
},
{
    toJSON: {
        getters: true,
        virtuals: true
    }
  }
)

//returns the number of reactions
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//this creates the User model using the ThoughtSchema!
const Thought = model('Thought', ThoughtSchema);

//don't forget to export the User model
module.exports = Thought;