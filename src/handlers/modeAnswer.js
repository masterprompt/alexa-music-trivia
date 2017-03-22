'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./../data/constants');

var sayGoodbye = require('./../common/sayGoodbye');
var poseChallenge = require('./../common/poseChallenge');

module.exports = Alexa.CreateStateHandler(constants.states.ANSWER_MODE, {
    'NewSession': function () {
        this.handler.state = '';
        this.emitWithState('NewSession'); // Equivalent to the Start Mode NewSession handler
    },

    'AnswerIntent': function() {
        var challenge = this.attributes['challenge'] || {};
        if(constants.options[challenge.option] == this.event.request.intent.slots.Answer.value){
            this.handler.state = constants.states.START_MODE;
            this.emit(':ask', this.event.request.intent.slots.Answer.value + ' is correct! Would you like to try another', 'Say yes to try another, or no to end the game.');
        }else{
            this.emit(':ask', this.event.request.intent.slots.Answer.value + ' is not the correct answer, please try again.', 'Please try again');
        }
    },

    //  SKipping
    'DontKnowIntent': function() {
        var challenge = this.attributes['challenge'] || {};
        this.handler.state = constants.states.START_MODE;
        this.emit(':ask', (challenge.surrender || '') + 'Would you like to try another?', 'Say yes to try another, or no to end the game.');
    },
    'AMAZON.NextIntent': poseChallenge({newChallenge:true}),
    //  Repeat
    'AMAZON.RepeatIntent': poseChallenge({newChallenge:false}),


    //  Help them
    'AMAZON.HelpIntent': function() {
        this.emit(':ask', 'You can answer with, A, B, C, or, D.  You may also say, I don\'t know, skip, repeat, and cancel.');
    },

    'AMAZON.CancelIntent': sayGoodbye,
    'SessionEndedRequest': sayGoodbye,

    'Unhandled': function() {
        this.emit(':ask', 'Sorry, I didn\'t get that. Try saying A, B, C, or, D.', 'Try saying A, B, C, or, D.');
    }
});
