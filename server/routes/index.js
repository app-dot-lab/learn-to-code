const authRoutes = require('./auth_routes')
const postRoutes = require('./post_routes')
module.exports=(router,serviceLocator)=>{
    const logger = serviceLocator.get('logger')
    authRoutes(router,serviceLocator);
    postRoutes(router,serviceLocator);
    router.get('/',(req,res,next)=>{
        logger.info('API / reached');
    })
}