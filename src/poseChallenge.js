'use strict';

var constants = require('./constants');
var generateQuestion = require('./generateQuestion');

module.exports = function(options){
    options = options || {};
    return function(){
        this.handler.state = constants.states.ANSWER_MODE;
        console.log('attributes:', this.attributes['challenge']);
        var challenge = (options.newChallenge ? generateQuestion() : this.attributes['challenge']);
        console.log('Challenge1:', challenge);
        challenge = challenge || generateQuestion();
        console.log('Challenge2:', challenge);
        this.attributes['challenge'] = challenge;
        this.emit(':ask', challenge.speak + challenge.prompt, challenge.prompt);
    };
};