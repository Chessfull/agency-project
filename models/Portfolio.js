const mongoose = require('mongoose');

// ▼ Creating portfolio scheme for database ▼
const portfolioSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String }, 
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
