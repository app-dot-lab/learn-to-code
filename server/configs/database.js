'use strict';

const serviceLocator = require('../libs/service_locator');
const logger = serviceLocator.get('logger');
const configs = serviceLocator.get('configs');
const mongoose = serviceLocator.get('mongoose');

class Database{
    connect(){
        const url =  `mongodb+srv://${configs.db.db_username}:${configs.db.db_password}@${configs.db.db_cluster}.mongodb.net/${configs.db.db_name}`;
        mongoose.connect(
           url,{
            useUnifiedTopology: true,
            useNewUrlParser:true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        const db = mongoose.connection;
        db.on("error", ()=> logger.error('Database connection error'));
        db.on("open",()=>{
            console.log('DB connection successful');
        })
    }
}
module.exports = new Database();