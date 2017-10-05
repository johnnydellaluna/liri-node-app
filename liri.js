// my-tweets

var keys = require('keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require("request");

var twitterClient = new Twitter(keys.twitterKeys)

var spotifyClient = new Spotify(keys.spotifyKeys);

var movieKey = keys.movie;


// What we want are the text and created_at attributes

function twitterFunction() {

    var params = { screen_name: 'johnnydellaluna' };

    twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log(response);
            }
        }
    })
};

// spotify-this-song
// Get artist, song name, Spotify link, album

function spotifyFunction() {
    spotifyClient.search({ type: 'track', query: 'The Sign' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    })
};

// movie-this

function movieFunction() {
    request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short" + movieKey, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("Title: ");
            console.log("Year: ");
            console.log("Rotten Tomatoes: ");
            console.log("IMDB: " + JSON.parse(body).imdbRating);
            console.log("Country: ");
            console.log("Language: ");
            console.log("Plot: ");
            console.log("Actors: ");
        }
    })
};

// do-what-it-says

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }

    function spotifyFunction() {
        spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data);
        })
    }
});