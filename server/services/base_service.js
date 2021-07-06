//Base classes for all our services.
class BaseService{
    //This class will only be called via super class which is called by awilix,which passes a cradle 
    // instance to the constructor, from which we can get things like the logger.
    constructor(opts){
        this.logger= opts.logger;
        this.database= opts['mongoService'];
    }
}
module.exports= BaseService;