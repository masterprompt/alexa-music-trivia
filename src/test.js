var alexaHelper = require('./common/alexaHelper');

function log(message){
    return function(data){
        console.log(message,data);
        return data;
    };
}

alexaHelper.start()
    .then(log('Start:'))
    .then(alexaHelper.tell('Welcome to Music Trivia.'))
    .then(log('tell:'))
    .then(alexaHelper.tell('I will ask you various questions regarding artists and their music.'))
    .then(log('tell:'))
    .then(alexaHelper.prompt('Are you ready to play?'))
    .then(log('prompt:'))
    .then(alexaHelper.reprompt('Are you ready to play? Please answer with yes, or no.'))
    .then(log('prompt:'))
    .then(alexaHelper.commit())
    .then(log('commit:'))
;