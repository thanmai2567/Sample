const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }, // Note: Hash this in real applications!
});

module.exports = mongoose.model('User', userSchema);
