// bring in json web token
const jwt = require('jsonwebtoken');
// bring in secretes
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if(token) {

        jwt.verify(token, secrets.jwtSecret, (err, decodToken) => {
            if(err){
                // token not valid
                res.status(401).json({
                    message: "Credentials are not valid"
                })
            } else {
                req.user = {roles: decodeToken.roles, username: decodeToken.username}
                next();
            }
        }) // verifies token
    } else {
        res.status(400).json({
            message: "A token was not provided"
        })
    }
};