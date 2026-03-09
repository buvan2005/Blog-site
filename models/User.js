'use strict';

const mongoose = require('mongoose');

// Create user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        bio: { type: String },
        avatar: { type: String },
        favoriteMovies: [{ type: String }]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// Export the user model
module.exports = mongoose.model('User', userSchema);