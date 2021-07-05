module.exports=(router,serviceLocator)=>{
    const userController = serviceLocator.get('userController')
    const logger = serviceLocator.get('logger') 
    const passport = serviceLocator.get('passport')
    router.post('/login',passport.authenticate("local"),(req,res,next)=>{
        userController.login(req,res,next);
    })
}