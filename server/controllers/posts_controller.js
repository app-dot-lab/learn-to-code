class PostsController{
    constructor(opts){
        this.logger= opts.logger
    }
    async getPosts(req,res,next){
        this.logger.info('PostsController getPosts() called')
    }
}
module.exports = PostsController;