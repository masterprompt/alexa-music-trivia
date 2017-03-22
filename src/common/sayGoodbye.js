'use strict';

var createPartingPhrase = require('./createPartingPhrase');

module.exports = function(){
    this.emit(':tell', createPartingPhrase({prefix:'ok,'}));
};