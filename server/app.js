const express = require('express');
const serviceLocator= require('./libs/service_locator');

const configs = serviceLocator.get('configs')
const logger= serviceLocator.container.cradle.logger
const app = express();


const startServer= async ()=> {
    process.on('uncaughtException',()=>{
        logger.error('Uncaught exception was thrown in App.js')
    })
    app.listen(configs.app.port,()=>{
        logger.info(`Listening on ${configs.app.port}`)
    })
}
startServer();