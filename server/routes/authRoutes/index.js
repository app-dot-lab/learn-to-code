module.exports=(router,serviceLocator)=>{
    const logger = serviceLocator.get('logger') 
    router.get('/',(req,res,next)=>{
        logger.info('auth / reached');
    })
}