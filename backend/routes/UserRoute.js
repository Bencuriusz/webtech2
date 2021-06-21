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
User.find({ $username: { $search: "java coffee shop" } })
//GET ONE
UserRoute.route('/read/:username').get((req, res) => {
    User.findById(req.params.username, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
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