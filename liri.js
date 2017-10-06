// my-tweets

var keys = require('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require("request");

var twitterClient = new Twitter(keys.twitterKeys)

var spotifyClient = new Spotify(keys.spotifyKeys);

var movieKey = keys.movie;

var fs = require("fs");

// Put in switch case statements

switch (action) {
  case "my-tweets":
    twitterFunction();
    break;

  case "spotify-this-song":
    spotifyFunction();
    break;

  case "movie-this":
    movieFunction();
    break;

  case "do-what-it-says":
    doIt();
    break;
}


// What we want are the text and created_at attributes

function twitterFunction() {

    var params = { screen_name: 'johnnydellaluna' };

    twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log(JSON.stringify(response.text, null, 2));
                console.log(JSON.stringify(response.created_at, null, 2));
            }
        }
    })
};

// spotify-this-song
// Get artist, song name, Spotify link, album - NEED TO FIGURE OUT PARAMETERS

function spotifyFunction() {
    spotifyClient.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(JSON.stringify(data, null, 2));
    })
};

// movie-this

function movieFunction() {
    request("http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short" + movieKey, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[2]);
            console.log("IMDB: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    })
};

// do-what-it-says

function doIt() {

fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
        return console.log(error);
    }

    function spotifyFunction() {
        spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data);
        })
    }
})
};