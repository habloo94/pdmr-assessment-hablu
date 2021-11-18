const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    year: {
        type: String,
        // required: true
    },
    model: {
        type: String,
        // required: true
    },
    colour: {
        type: String,
        // required: true
    },
    mileage: {
        type: Number,
        // required: true
    },
    created: {
        type: Date,
        // required: true
    },
    createdby: {
            type: Number,
        // required: true
    },
})
module.exports = mongoose.model('list', listSchema);