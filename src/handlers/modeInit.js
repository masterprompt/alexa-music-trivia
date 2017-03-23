'use strict';

var alexaHelper = require('./../common/alexaHelper');
var Alexa = require('alexa-sdk');
var constants = require('./../data/constants');

var handler = {};

handler[alexaHelper.intents.newSession] = function () {
    alexaHelper.start(this)
        .then(alexaHelper.setState(constants.states.START_MODE))
        .then(alexaHelper.tell('Welcome to Music Trivia.'))
        .then(alexaHelper.tell('I will ask you various questions regarding artists and their music.'))
        .then(alexaHelper.prompt('Are you ready to play?'))
        .then(alexaHelper.reprompt('Are you ready to play? Please answer with yes, or no.'))
        .then(alexaHelper.commit())
    ;
};

module.exports = Alexa.CreateStateHandler(constants.states.INIT_MODE,handler);

/*
module.exports = Alexa.CreateStateHandler(constants.states.INIT_MODE, {
    "NewSession": function () {
        alexaHelper.start(this)
            .then(alexaHelper.setState(constants.states.START_MODE))
            .then(alexaHelper.tell('Welcome to Music Trivia.'))
            .then(alexaHelper.tell('I will ask you various questions regarding artists and their music.'))
            .then(alexaHelper.prompt('Are you ready to play?'))
            .then(alexaHelper.reprompt('Are you ready to play? Please answer with yes, or no.'))
            .then(alexaHelper.commit())
        ;
    }
});
*/