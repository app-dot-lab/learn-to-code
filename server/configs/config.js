'use strict';
var dotenv = require("dotenv")
dotenv.config()
module.exports = {
    app:{
        port: process.env.PORT_NO,
    },
}