module.exports = function(message, options){
    options = options || {};
    return function(helper){
        helper.reprompt = (helper.reprompt  || '' ) + message + ' ';
        return helper;
    };
};