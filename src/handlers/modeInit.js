'use strict';

var alexaHelper = require('./../common/alexaHelper');
var Alexa = require('alexa-sdk');
var constants = require('./../data/constants');

module.exports = Alexa.CreateStateHandler(constants.states.INIT_MODE, {
    "NewSession": function () {
        this.handler.state = constants.states.START_MODE;
        alexaHelper.start(this)
            .then(alexaHelper.tell('Welcome to Music Trivia.'))
            .then(alexaHelper.tell('I will ask you various questions regarding artists and their music.'))
            .then(alexaHelper.prompt('Are you ready to play?'))
            .then(alexaHelper.reprompt('Are you ready to play? Please answer with yes, or no.'))
            .then(alexaHelper.commit())
        ;
        /*
        var message, reprompt;
        if(this.attributes['STATE']){

            message = 'Welcome to Music Trivia. I see you have a previous game running, would you like to continue?.';
            reprompt = 'Would you like to continue your previous game? Please answer with yes, or no.';
        }else{
            message = 'Welcome to Music Trivia. I will ask you various questions regarding artists and their music.  Are you ready to play?';
            reprompt = 'Are you ready to play? Please answer with yes, or no.';
        }

        this.handler.state = constants.states.START_MODE;

        this.emit(':askWithCard', message, reprompt);
        */
    }
});
