const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    posterImageUrl: { type: String, required: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);