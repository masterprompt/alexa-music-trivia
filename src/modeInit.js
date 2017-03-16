'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');

module.exports = Alexa.CreateStateHandler(constants.states.INIT_MODE, {
    "NewSession": function () {
        this.handler.state = constants.states.START_MODE;
        var message = 'Welcome to Music Trivia. I will ask you various questions regarding artists and their music.  Are you ready to play?';
        var reprompt = 'Are you ready to play? Please answer with yes, or no.';
        this.emit(':askWithCard', message, reprompt);
    }
});
/*
 <speak> Listen carefully to this audio clip
 <break strength=\"strong\"/>
 <audio src=\"https://s3.amazonaws.com/casey-testing/samples/cf4b9110-5c8c-43f2-9cf6-519958b04e0f.mp3\"/>
 <break strength=\"strong\"/>
 Which album did this track belong to in
 <say-as interpret-as=\"date\" format=\"year\">1967</say-as>?
 Was it ,<say-as interpret-as=\"spell-out\">A</say-as>, United,,
 <say-as interpret-as=\"spell-out\">B</say-as>, Moving Pictures,,
 <say-as interpret-as=\"spell-out\">C</say-as>, Crystal Ball,,or,
 <say-as interpret-as=\"spell-out\">D</say-as>, The Rise and Fall of Ziggy Stardust and the Spiders from Mars. </speak>

    */