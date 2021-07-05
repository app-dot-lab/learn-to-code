const jwt = require('jsonwebtoken');
const configs = require('../configs/config')
const signToken=async user=> {
    const token =jwt.sign({
        username: user.username
    },configs.app.jwt_secret);
    return token;
}

module.exports = {
    signToken
}