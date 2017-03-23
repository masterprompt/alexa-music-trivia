module.exports = function(options){
    options = options || {};
    return function(helper){
        //  Set state
        helper.alexa.handler.state = helper.state || helper.alexa.handler.state;

        //  Construct Speak
        var method = ':tell';
        if(helper.prompt || helper.reprompt){
            method = ':ask';
        }
        helper.alexa.emit(method, helper.tell + ( helper.prompt || ''), helper.reprompt);
        return helper;
    };
};