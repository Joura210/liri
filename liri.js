require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var moment = require('moment');
var fs = require('fs');

// console.log("I'm working")
// Make it so liri.js can take in one of the following commands:
//    * `concert-this`
//    * `spotify-this-song` **
//    * `movie-this`
//    * `do-what-it-says`


// Then run a request with axios to the OMDB API with the movie specified
var doWhatItSays = function () {
    fs.readFile('./random.txt', 'utf8', function (err, data) {
        if (err) throw err;

        var dataArr = data.split(',');
        if (dataArr.length == 2) {
            choice(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            choice(dataArr[0]);

        }

    });
}
var getMovie = function (movieName) {

    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy").then(
        function (response) {
            console.log("Movie Title: " + response.data.Title);
            console.log("Year of Release: " + response.data.Year);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1]);
            console.log("Produced in: " + response.data.Country);
            console.log("Movie Language: " + response.data.Language);
            console.log("Movie Plot: " + response.data.Plot);
            console.log("Actors in the Movie: " + response.data.Actors);
            console.log(' --------------- ')



        }

    );
}
var artistName = function (artist) {
    return (artist.name);
}
var getSpotify = function (songName) {
    spotify.search({ type: 'track', query: songName, }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;

        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log[i];
            console.log('artist(s); ' + songs[i].artists.map(artistName));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('album: ' + songs[i].album.name)
            console.log(' ');
        }
    });
}
// var spotifyThisSong = function(){
// spotify
//     .search({ type: 'track', query: 'All the Small Things' })
//     .then(function (response) {
//         // if(var i = 0; i < response.length[i]; i++)
//         console.log(response);
//     });

// }

var choice = function (userPick, userData) {
    switch (userPick) {
        case 'spotify-this-song':
            getSpotify(userData);
            break;
        case 'movie-this':
            getMovie(userData);
            break;

        case 'do-what-it-says':
            doWhatItSays();
            break;

        default:
            console.log('Liri does not know that');
    }

}

var run = function (argOne, argTwo) {
    choice(argOne, argTwo);
};

run(process.argv[2], process.argv[3]);
