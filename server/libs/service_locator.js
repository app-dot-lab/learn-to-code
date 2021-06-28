const {Lifetime,asValue,asClass} = require('awilix');
const awilix = require('awilix');
const config =require('../configs/config');
const logger = require('./logger').createLogger(config.application_logging)

function ServiceLocator(){
    this.container= awilix.createContainer();
    this.register();
}
ServiceLocator.prototype.register=function(){
    this.container.loadModules(
        ['./controllers/*.js','./services/*.js'],
        {
            formatName: 'camelCase',
            lifetime: Lifetime.SINGLETON,
            register: asClass 
        }
    ).register({
        logger:asValue(logger)
    })
    .register({
        configs: asValue(require('../configs/config'))
    })
    .register({
        routerUtils: asValue(require('../utils/router_utils'))
    })
}

ServiceLocator.prototype.get=function(dependencyName) {
    try {
        return this.container.resolve(dependencyName);
    } catch (error) {
        logger.error(`Could not find matching dependency :${error}`)
        throw(error)
    }
}
module.exports = new ServiceLocator();
