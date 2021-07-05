class UserService{
    constructor(opts){
        this.logger = opts.logger;
        this.commonUtils =opts.commonUtils;
    }
    async login(user){
        const token = await this.commonUtils.signToken(user);
        return {
            auth: true,
            user:{
                token,
                username: user.username,
                email:user.email,
            },
            message: "User authenticated"
        }
    }
}
module.exports = UserService