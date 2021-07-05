const jwt = require('express-jwt')
const {isCelebrateError} = require('celebrate')
const httpStatus = require('http-status');

module.exports.initJwt=(router,serviceLocator)=>{
    const configs = serviceLocator.get('configs')
    const logger = serviceLocator.get('logger')
    router.use(
        jwt({
            secret:configs.app.jwt_secret,
            algorithms: ['H256'],
            credentialsRequired:true,
            getToken:function getTokenFromQuery(req){
                if(req.headers.authorization && req.headers.authorization.split(' ')[0]=="Bearer")
                    return req.headers.authorization.split(' ')[1]
                return null;
                },
        }).unless({
            path: [/\/login/],
        })
    )
}
module.exports.errorJwt=(router,serviceLocator)=>{
    const logger = serviceLocator.get('logger')
    const configs = serviceLocator.get('configs')
    router.use((err,req,res,next)=>{
        if(isCelebrateError(err)) {
            logger.error(err.message);
            err.statusCode= httpStatus.BAD_REQUEST
        }
        if(err.status)
            err.statusCode = err.status;
        if(err.code && err.code ===11000)
            err.statusCode = httpStatus.CONFLICT
        if (!err.statusCode) 
            err.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        res.status(err.statusCode).send(err);  
        logger.error(err);
    })
}