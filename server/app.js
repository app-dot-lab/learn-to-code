const express = require('express');
const serviceLocator= require('./libs/service_locator');
const passport=require('passport')
const configs = serviceLocator.get('configs')
const logger= serviceLocator.container.cradle.logger
const routerUtils= serviceLocator.container.cradle.routerUtils
const app = express();

app.use(passport.initialize());
app.use(passport.session());

var authRoutes= require('./routes/authRoutes/index')
var apiRoutes= require('./routes/apiRoutes/index');
const { initPassport } = require('./utils/passport_utils');

//Create auth router and assign its routing to the authRoutes file.
const authRouter=express.Router();
app.use('/auth',authRouter);
initPassport(app,authRouter,serviceLocator);
authRoutes(authRouter,serviceLocator);

//Create api router and assign its routing to the api file.
const apiRouter=express.Router();
app.use('/api',apiRouter);
routerUtils.initJwt(apiRouter,serviceLocator)
routerUtils.errorJwt(apiRouter,serviceLocator)
apiRoutes(apiRouter,serviceLocator);


app.get('/',(req,res,next)=>    {
    res.send('Nothing to see here. Move on');
})
const startServer= async ()=> {
    process.on('uncaughtException',()=>{
        logger.error('Uncaught exception was thrown in App.js')
    })
    app.listen(configs.app.port,()=>{
        logger.info(`Listening on ${configs.app.port}`)
    })
}
startServer();