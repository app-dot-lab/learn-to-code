const serviceLocator = require('../libs/service_locator');
const mongoose = serviceLocator.get('mongoose');
const passportLocalMongoose = serviceLocator.get('passportMongoose');
const {Schema } = mongoose;

const userSchema = Schema({
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model('User',userSchema);