'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        require('./modeInit'),
        require('./modeAnswer'),
        require('./modeStart')
    );
    alexa.execute();
};