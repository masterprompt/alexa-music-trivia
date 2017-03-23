'use strict';

var Alexa = require('alexa-sdk');
var alexaHelper = require('./../common/alexaHelper');

var constants = require('./../data/constants');

var sayGoodbye = require('./../common/sayGoodbye');
var poseChallenge = require('./../common/poseChallenge');


module.exports = Alexa.CreateStateHandler(constants.states.START_MODE, {
    'NewSession': function () {
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },

    'AMAZON.HelpIntent': function() {
        var message = 'Welcome to Music Trivia. I will ask you various questions regarding artists and their music.  Are you ready to play?';
        var reprompt = 'Are you ready to play? Please answer with yes, or no.';
        this.emit(':ask', message, reprompt);
    },

    'AMAZON.YesIntent': poseChallenge({newChallenge:true}),
    'AMAZON.NoIntent': sayGoodbye,
    'SessionEndedRequest': sayGoodbye,

    'Unhandled': function() {
        var message = 'Say yes to continue, or no to end the game.';
        this.emit(':ask', message, message);
    }
});

