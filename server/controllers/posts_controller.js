//TODO Add service layer for getting selectedPost.
class PostsController{
    constructor(opts){
        this.logger= opts.logger
        this.service = opts['postsService']
    }
    async getPosts(req,res,next){
        this.logger.info('PostsController getPosts() called')
        const result = await this.service.getPosts(parseInt(req.query.limit),parseInt(req.query.page))
        res.send(result)
    }
    async getPost(req,res,next){
        this.logger.info(`PostController getPost(${req.params.id}) called`)

    }
}
module.exports = PostsController;