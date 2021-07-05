class UserController{

    constructor(opts){
        this.opts = opts;
        this.logger = opts.logger
        this.service = opts['userService']
    }
    async login(req,res,next){
        this.logger.info('User controller Login() entered')
        try{
            const result  = await this.service.login(req.user)
            res.send(result)
        }
        catch(exception){
            this.logger.error('Exception in UserController Login() ' + exception);
        }
    }
}
module.exports=UserController