
class PostsController{
    constructor(opts){
        this.logger= opts.logger
    }
    async getPosts(req,res,next){
        this.logger.info('PostsController getPosts() called')
    }
    async getPost(req,res,next){
        this.logger.info(`PostController getPost(${req.params.id}) called`)

    }
}
module.exports = PostsController;