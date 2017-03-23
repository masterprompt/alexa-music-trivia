var $q = require('q');
var clean = require('./clean');

module.exports = function(alexa){
    var helper = {alexa:alexa}
    return $q.when(helper)
        .then(clean({tell:null, prompt:null, reprompt:null}));
};