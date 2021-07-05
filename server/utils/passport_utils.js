const passport = require('passport');
const LocalStrategy =require('passport-local').Strategy;
const passportGoogle=require('passport-google-auth').Strategy;
const User = require('../models/User'); 
module.exports.initPassport=(app,router,serviceLocator)=>{
    const logger = serviceLocator.get('logger')

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser());
}