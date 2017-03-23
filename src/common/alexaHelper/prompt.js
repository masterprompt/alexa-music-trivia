module.exports = function(message, options){
    options = options || {};
    return function(helper){
        helper.prompt = (helper.prompt || '' ) + message + ' ';
        return helper;
    };
};