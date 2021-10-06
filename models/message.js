const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    lat: {
        type: Number,
        require: true
    },
    lon: {
        type: Number,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Message',messageSchema);