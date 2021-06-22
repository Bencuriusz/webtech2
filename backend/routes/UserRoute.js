const express = require('express');
const app = express();
const UserRoute = express.Router();

let User = require('../models/User');

//GET ALL
UserRoute.route('/getalluser').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//GET ONE
UserRoute.route('/readuser/:username').get((req, res) => {
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

//REGISTER
UserRoute.route('/register').post((req, res, next) => {
    User.find({ "username": req.body.username }, (error, data) => {
        if (error) {
            return next(error)
        } else if (data.length) {
            return next("user already exists")
        } else {
            User.create(req.body, (error, data) => {
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
UserRoute.route('/deleteuser/:id').delete((req, res, next) => {
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