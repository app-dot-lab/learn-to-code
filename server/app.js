const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const serviceLocator= require('./libs/service_locator');
const passport= serviceLocator.get('passport');
const configs = serviceLocator.get('configs');
const path = serviceLocator.get('path');
const logger= serviceLocator.get('logger');
const routerUtils= serviceLocator.get('routerUtils');
const Database = require('./configs/database');
const app = express();
const { initPassport } = require('./utils/passport_utils');
const apiRouter=express.Router();
const User = require('./models/User');
const startServer= async ()=> {
    process.on('uncaughtException',()=>{
        logger.error('Uncaught exception was thrown in App.js')
    })
    app.listen(configs.app.port,()=>{
        logger.info(`Listening on ${configs.app.port}`)
    })
}

Database.connect();

//Set the view engine
app.set('views',path.join(__dirname, 'views'));

//Registering middlewares here.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(
    cors({
        origin:'https://localhost:3000',// The port from which react will try to access this project
        credentials: true,
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use('/api',apiRouter);

app.disable('x-powered-by');
var apiRoutes= require('./routes/index');
//Set-up passport for using our auth API's
initPassport(apiRouter,serviceLocator);
//Create api router and assign its routing to the api file.
routerUtils.initJwt(apiRouter,serviceLocator)
routerUtils.errorJwt(apiRouter,serviceLocator)
apiRoutes(apiRouter,serviceLocator);


app.get('/',(req,res,next)=>    {
    res.send('Nothing to see here. Move on');
})
startServer();