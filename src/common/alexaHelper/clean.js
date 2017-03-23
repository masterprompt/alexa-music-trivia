var _  = require('lodash');

module.exports = function(options){
    return function(helper){
        helper = helper || {};
        helper = _.assign(helper || {}, options);
        return helper;
    };
};