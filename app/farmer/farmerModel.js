const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    isVerified: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('Farmer', farmerSchema);