const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
}, {
    collection: 'books'
})

module.exports = mongoose.model('Book', Book)
