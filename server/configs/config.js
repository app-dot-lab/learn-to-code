'use strict';
var dotenv = require("dotenv")
dotenv.config()
module.exports = {
    app:{
        port: process.env.PORT_NO,
        jwt_secret: process.env.JWT_SECRET
    },
    application_logging:{
        info_file: 'logs/info.log',
        error_file: 'logs/error.log',
        debug_file: 'logs/debug.log',
        console_logging: true
    },
    db:{
        db_name: process.env.DB_NAME,
        db_username: process.env.DB_USERNAME,
        db_password:process.env.DB_PASSWORD,
        db_cluster:process.env.DB_CLUSTER,
    }
}