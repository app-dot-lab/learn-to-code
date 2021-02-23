const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
});

userSchema.plugin(passportLocalMongoose, {
    findByUsername: function(model, queryParameters) {

        // Checks both username and email
        for( let param of queryParameters.$or ){
            if( typeof param == "object" && param.hasOwnProperty("username") ){
                queryParameters.$or.push( { email : param.username } );
            }
        }
        return model.findOne(queryParameters);
    }
});

userSchema.statics.findOrCreate = async function (email, password) {
    console.log('email', email)
    var user = await this.findOne({ email });
    if (!user) {
        user = await this.create({
            email: email,
            username: email.split("@")[0],
            password: password
        });
        console.log('created new user')
    } else {
        console.log('user already exists');
    }
    return user
};

module.exports = mongoose.model("User", userSchema);
