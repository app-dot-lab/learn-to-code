'use strict';
var dotenv = require("dotenv")
dotenv.config()
module.exports = {
    app:{
        port: process.env.PORT_NO,
    },
    application_logging:{
        info_file: 'logs/info.log',
        error_file: 'logs/error.log',
        debug_file: 'logs/debug.log',
        console_logging: true
    }
}