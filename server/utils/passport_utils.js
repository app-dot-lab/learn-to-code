const passport = require('passport');
const LocalStrategy =require('passport-local').Strategy;
const passportGoogle=require('passport-google-auth').Strategy;
module.exports.initPassport=(app,router,serviceLocator)=>{
    const logger = serviceLocator.get('logger')
    logger.info('entered passport utils')
    
    passport.use(new LocalStrategy(
        function(username,password,done){
            logger.info('Validated')
            return done(null,'user')
        }
    ));
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
}