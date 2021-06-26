const {createLogger,format, transports, level} = require("winston");
const httpContext = require('express-http-context');
const {json,combine,label,timestamp}=format;
const getReqId=format(info=>{
    const reqId= httpContext.get('reqId');
    if(reqId)
        info['req_id']=reqId;
    return info;
})
const getTransport=function (config){
    var customTransports= [];

    if(config.info_file)
        customTransports.push(
            new transports.File({filename:config.info_file,level:'info'})
        );
    if(config.error_file)
        customTransports.push(
            new transports.File({filename:config.error_file,level:'error'})
        )
    if(config.debug_file)
        customTransports.push(
            new transports.File({filename: config.debug_file,level:'debug'})
        )
    if(config.console_logging)
        customTransports.push(
            new transports.Console({level:'info'})   
        )
    return customTransports;
}
module.exports= {
    createLogger(config){
        return createLogger({
            transports: getTransport(config),
            format: combine(
                getReqId(),
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                label({label:"API"}),
                json()
            ),      
        });
    }
};