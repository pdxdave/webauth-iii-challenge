// bring in express
const express = require('express');

// create router
const router = require.Router();

// bring in bcrypt
const bcrypt = require('bcryptjs');

// bring in jason web tokens && secret
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js')

// bring in database link
const Users = require('../users/usersModel');



// CREATE NEW USER
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

// LOGIN USER
router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            // create token
            const token = generateToken(user)

            res.status(200).json({
                message: `Hello ${user.username}`, token
            })
        } else {
            res.status(401).json({
                message: 'The credentials are not valid'
            })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

// Token function
function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        roles: ['student']
    };

    const options = {
        expires: '8h'
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}

module.exports = router;