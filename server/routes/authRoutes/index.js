const passport = require('passport');
module.exports=(router,serviceLocator)=>{
    const logger = serviceLocator.get('logger') 
    router.get('/',(req,res,next)=>{
        logger.info('auth / reached');
    })
    router.get('/login',passport.authenticate("local"),(req,res,next)=>{
        res.send('Logged in')
    })
}