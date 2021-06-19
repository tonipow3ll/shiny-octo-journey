const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Location', LocationSchema);