const mongoose = require("mongoose")

const SignUpTemplate = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    letter: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('mytable', SignUpTemplate)