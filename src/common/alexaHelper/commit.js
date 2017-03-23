module.exports = function(options){
    options = options || {};
    return function(helper){
        var method = ':tell';
        if(helper.prompt || helper.reprompt){
            method = ':ask';
        }
        helper.alexa.emit(method, helper.tell + ( helper.prompt || ''), helper.reprompt);
        return helper;
    };
};