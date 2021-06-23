const express = require('express');
const app = express();
const BookRoute = express.Router();

let Book = require('../models/Book');

//GET ALL
BookRoute.route('/getallbook').get((req, res) => {
    Book.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//GET ONE
BookRoute.route('/readbook/:title').get((req, res) => {
    Book.find({ "title": req.params.title }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//CREATE
BookRoute.route('/createbook').post((req, res, next) => {
    Book.find({ $and: [{ "title": req.body.title }, { "author": req.body.author }] }, (error, data) => {
        if (error) {
            return next(error)
        } else if (data.length) {
            return next("Book already exists")
        } else {
            Book.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        }
    })
});

//DELETE
BookRoute.route('/deletebook/:id').delete((req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// UPDATE
BookRoute.route('/updatebook/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

module.exports = BookRoute;