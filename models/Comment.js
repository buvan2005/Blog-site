const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Update the updatedAt field on every update
commentSchema.pre('findOneAndUpdate', function() {
    this.set({ updatedAt: Date.now() });
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;