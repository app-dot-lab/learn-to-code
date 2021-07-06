const BaseService = require ('./base_service')
class PostsService extends BaseService{
    constructor(opts){
        super(opts)
    }
    async getPosts(limit,page){
        try{
            this.logger.info(`getPosts(${limit},${page}) called`)
            return await this.database.getPaginated('Post',limit,page)
        }
        catch(exception){
            this.logger.error(`something went wrong ${exception}`)
        }
    }

}
module.exports= PostsService;