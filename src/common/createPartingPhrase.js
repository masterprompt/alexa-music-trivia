'use strict';

var partingPhrases = require('./../data/partingPhrases');
var shuffle = require('shuffle-array');

module.exports = function(options){
    options = options || {};
    var phrases = shuffle(partingPhrases, {copy:true});
    var phrase = phrases[Math.floor(Math.random() * (phrases.length))];
    return (options.prefix || '') + phrase + (options.postfix || '');
};