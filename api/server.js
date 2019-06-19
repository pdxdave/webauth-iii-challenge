// bring in express
const express = require('express');

// other tools
const cors = require('cors');
const helmet = require('helmet');

// create server
const server = express();

// middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);


// router
const AuthRouter = require('../auth/authRouter');
const UsersRouter = require('../users/usersRouter');

server.use('/auth', AuthRouter);
server.use('/users', UsersRouter);


// test output
server.get('/', (req, res) => {
    res.send('This is a test page')
});

function logger(req, res, next) {
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;