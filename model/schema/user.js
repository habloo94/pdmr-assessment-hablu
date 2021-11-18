const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    username: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true
    },
    created: {
        type: Date,
        // required: true
    },
})
module.exports = mongoose.model('Users', userSchema);