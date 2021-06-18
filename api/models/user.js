const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false,
    },
    sub: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('User', UserSchema);