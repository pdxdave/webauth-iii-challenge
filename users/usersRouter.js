// bring in express
const express = require('express');
// create router
const router = express.Router();

const Users = require('./usersModel.js');
const restricted = require('../auth/restrictedMiddleware');
const checkRole = require('../auth/')

router.get('/', restricted, checkRole('student'), (req,res) => {
    Users.find()
    .then(user => {
        res.json(users)
    })
    .catch(err => res.send(err))
});

module.exports = router;