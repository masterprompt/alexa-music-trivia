"use strict";

module.exports = Object.freeze({
    
    // App-ID. TODO: set to your own Skill App ID from the developer portal.
    appId : '',
    name: 'Music Trivia',
    options: ['a','bee','see','dee'],
    
    //  DynamoDB Table name
    dynamoDBTableName : 'caseysAlexaTest',
    
    /*
     *  States:
     *  START_MODE : Welcome state when the audio list has not begun.
     *  PLAY_MODE :  When a playlist is being played. Does not imply only active play.
     *               It remains in the state as long as the playlist is not finished.
     *  RESUME_DECISION_MODE : When a user invokes the skill in PLAY_MODE with a LaunchRequest,
     *                         the skill provides an option to resume from last position, or to start over the playlist.
     */
    states : {
        INIT_MODE: '',
        START_MODE : '_START_MODE',
        ASK_MODE : '_ASK_MODE',
        ANSWER_MODE: '_ANSWER_MODE',
        RESUME_DECISION_MODE : '_RESUME_DECISION_MODE'
    }
});
