
module.exports = function(message, options){
    options = options || {};
    return function(helper){
        helper.tell = (helper.tell || '') + message + ' ';
        return helper;
    };
};