'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./src/data/constants');


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        require('./src/handlers/modeInit'),
        require('./src/handlers/modeAnswer'),
        require('./src/handlers/modeStart')
    );
    alexa.execute();
};