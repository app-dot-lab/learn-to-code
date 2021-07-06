class MongoService{
    constructor(opts){
        this.logger = opts.logger;
        this.mongoose= opts.mongoose;
    }
    getModelInstance(modelName){
        return this.mongoose.model(modelName);
    }
    async getPaginated(
        model,
        limit=10,
        page=0,
    ){
        var model = this.getModelInstance(model);
        const result =  
            await model
                .find()
                .skip(page)
                .limit(limit)
                .populate("author")
        console.log(result.length);
        return result;
    }
}
module.exports = MongoService;