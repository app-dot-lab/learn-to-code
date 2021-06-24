const {Lifetime,asValue,asClass} = require('awilix');
const awilix = require('awilix');

const config =require('../configs/config');

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
        logger:asValue(require('../libs/logger'))
    })
    .register({
        configs: asValue(require('../configs/config'))
    })
}

ServiceLocator.prototype.get=function(dependencyName) {
    try {
       return this.container.resolve(dependencyName);
    } catch (error) {
        throw(error)
    }
}
module.exports = new ServiceLocator();
