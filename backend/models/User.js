const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', User)
