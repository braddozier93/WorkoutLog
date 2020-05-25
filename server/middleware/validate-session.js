const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(!err && decoded){
            User.findOne({
                where: {
                    id: decoded.id
                }
            }, console.log(decoded))
            .then(user => {
                if(!user) throw 'err'//if not finding a user
                req.user = user;

                next();//to break out
            })
            .catch(err => next(err))//catches the error
        } else {
            req.errors = err;
            return res.status(500).send('Not authorized')
        }
    })
}

module.exports = validateSession;