'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./../data/constants');

module.exports = Alexa.CreateStateHandler(constants.states.INIT_MODE, {
    "NewSession": function () {
        this.handler.state = constants.states.START_MODE;
        var message = 'Welcome to Music Trivia. I will ask you various questions regarding artists and their music.  Are you ready to play?';
        var reprompt = 'Are you ready to play? Please answer with yes, or no.';
        this.emit(':askWithCard', message, reprompt);
    }
});
