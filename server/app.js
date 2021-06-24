var express = require('express');
var serviceLocator= require('./libs/service_locator');
var configs = serviceLocator.get('configs')

var app = express();

const startServer= async ()=> {
    process.on('uncaughtException',()=>{
        console.log('uncaughtException')
    })
    app.listen(configs.app.port,()=>{
        console.log('Listening on '+configs.app.port)
    })
}
startServer();