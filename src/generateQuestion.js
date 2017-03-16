'use strict';

var constants = require('./constants');
var songs = require('./data/library');
var _ = require('lodash');

module.exports = function(){
    var properties = ['artist', 'title', 'album', 'year'];
    var property = _.sample(properties);
    console.log('property:', property);
    return generateChallenge(property);
};



function generatePrompt(optionsArray){
    return 'Was it ' + _.map(optionsArray, generatePromptOption).join();
};

function generatePromptOption(value, index, arr){
    return ',' + (arr && index >= (arr.length - 1) ? 'or, ' : '' ) + generateOrdinal(index) + ', ' + value;
};

function generateOrdinal(index){
    return '<say-as interpret-as="spell-out">' + String.fromCharCode(65 + index) + '</say-as>';
};

function generateYear(year){
    return '<say-as interpret-as="date" format="y">' + year + '</say-as>';
};

function generateAudio(url){
    return '<break strength="strong"/> <audio src="' + url + '"/> <break strength="strong"/>';
};

function generateChallenge(property){
    property = property || 'artist';
    var song = _.sample(songs);

    var filter = {};
    filter[property] = song[property];
    var options = _.reject(songs, filter);
    options = _.shuffle(options);
    options = _.take(options, 3);
    options = _.map(options, _.property(property));

    var res = {};

    //  Find location for answer
    res.option = Math.floor(Math.random() * (3));

    //  Insert the correct option
    options.splice(res.option, 0, song[property]);

    //res.speak = 'Listen carefully to this audio clip' + generateAudio(song.file);
    //res.prompt = 'Which band performed this?' + generatePrompt(options) + '.';
    res.surrender = 'The correct answer was ' + generatePromptOption( song[property], res.option) + ', ';
    res.property = property;
    console.log('Casing:', property);
    switch(property){
        case 'artist':
            res = generateArtistChallenge(song, res, options);
            break;
        case 'title':
            res = generateTitleChallenge(song, res, options);
            break;
        case 'album':
            res = generateAlbumChallenge(song, res, options);
            break;
        case 'year':
            res = generateYearChallenge(song, res, options);
            break;
    }

    return res;
};

function generateArtistChallenge(song, res, options){
    var variant = Math.floor(Math.random() * (3));
    res.variant = variant;
    console.log('Variant:', variant);
    switch(variant){
        case 0:
            res.speak = 'Listen carefully to this audio clip' + generateAudio(song.file);
            res.prompt = 'Which artist, or group, performed this?' + generatePrompt(options) + '.';
            break;
        case 1:
            res.speak = ' ';
            res.prompt = 'Which artist, or group, released the song, ' + song.title + ', in ' + generateYear(song.year) + '?' + generatePrompt(options) + '.';
            break;
        case 2:
            res.speak = ' ';
            res.prompt = 'Which artist, or group, released the album, ' + song.album + ', in ' + generateYear(song.year) + '?' + generatePrompt(options) + '.';
            break;
    }
    //  artist -> track
    //  Artist -> year && title
    //  Artist -> year && album

    return res;
};

function generateAlbumChallenge(song, res, options){
    var variant = Math.floor(Math.random() * (2));
    res.variant = variant;
    console.log('Variant:', variant);
    switch(variant){
        case 0:
            res.speak = 'Listen carefully to this audio clip' + generateAudio(song.file);
            res.prompt = 'Which album did this track belong to in ' + generateYear(song.year) + '?' + generatePrompt(options) + '.';
            break;
        case 1:
            res.speak = ' ';
            res.prompt = 'Which album was released by ' + song.artist + ' in ' + generateYear(song.year) + '?' + generatePrompt(options) + '.';
            break;
    }
    //  album -> artist && year
    //  album -> track
    return res;
};

function generateYearChallenge(song, res, options){
    var variant = Math.floor(Math.random() * (2));
    res.variant = variant;
    console.log('Variant:', variant);
    switch(variant){
        case 0:
            res.speak = 'Listen carefully to this audio clip' + generateAudio(song.file);
            res.prompt = 'Which year was this track released in the album ' + song.album + '?' + generatePrompt(options) + '.';
            break;
        case 1:
            res.speak = ' ';
            res.prompt = 'Which year was the album, ' + song.album + ', released by ' + song.artist + '?' + generatePrompt(options) + '.';
            break;
    }
    //  year -> artist && album
    //  year -> track
    return res;
};

function generateTitleChallenge(song, res, options){
    var variant = Math.floor(Math.random() * (2));
    res.variant = variant;
    console.log('Variant:', variant);
    switch(variant){
        case 0:
            res.speak = 'Listen carefully to this audio clip' + generateAudio(song.file);
            res.prompt = 'Which was the title of that ' + song.artist + ' track?' + generatePrompt(options) + '.';
            break;
        case 1:
            res.speak = ' ';
            res.prompt = 'Which was the title of a track in the album, ' + song.album + ', by ' + song.artist + ', in ' + generateYear(song.year)  + '?' + generatePrompt(options) + '.';
            break;
    }
    //  title -> artist & album
    //  title -> track
    return res;
};

