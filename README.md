# Liri
An interactove node application that let's you do the following:
Find concert venues/dates for your favorite bands,
Use Spotify to search out favorite songs and get previews of said song,
Use the OMDB API to find out information regarding the movie of your choice.

Requirements: 
All of the tools you need to make the applicaiton run successfully are placed within the JSON package dependencies. You will also need to get your own API key for spotify.

To get the concert fucntionality the following must be typed into the command line:
node liri.js concert-this 'Name of chosen artist with quotes'

The output will be:
 The venue the artist is performing at 
 The location
 The date

The spotify ability works similarly, with the following input on the commande line:
node liri.js spotify-this-song 'Name of desired song with quotes'

The output will be: 
Number of songs spotify has with this title
The artist
Link to preview the song.

The OMDB functionality works by the following input on the command line:

node liri.js movie-this 'Name of movie with quotes'

This will provide the user with following:
 The title 
 Year of release 
 IMDB rating
 Rotten Tomatoes Rating
 Country it was produced
 Movie Language
 Short movie plot
 Actors found within the movie 
