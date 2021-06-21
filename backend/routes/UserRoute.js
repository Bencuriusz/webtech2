const express = require('express');
const app = express();
const UserRoute = express.Router();

let User = require('../models/User');

//CREATE
UserRoute.route('/create').post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//GET ALL
UserRoute.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//GET ONE
UserRoute.route('/read/:username').get((req, res) => {
    User.find({ "username": req.params.username }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//LOGIN
UserRoute.route('/login').post((req, res) => {
    User.find({ $and: [{ "username": req.body.username }, { "password": req.body.password }] }, (error, data) => {
        if (error) {
            return next(error)
        } else if (data.length) {
            res.json(data)
        }
        else {
            res.status(401).send();
        }
    })
})

//DELETE
UserRoute.route('/delete/:id').delete((req, res, next) => {
    User.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = UserRoute;