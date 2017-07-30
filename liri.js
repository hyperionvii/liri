
var keyStuff = require("./keys.js")

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require('request');


////twitter



var twitterCall = function() {

	var client = new Twitter(keyStuff.twitterKeys);

	var params = {screen_name: 'liriFiaCat'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    for (var i = 0; i < tweets.length; i++) {
	    	console.log(tweets[i].created_at);
	    	console.log(" ");
	    	console.log(tweets[i].text);
	    }
	  }
	});
}



////spotify

 
var spotifyCall = function(songname) {

	var spotify = new Spotify(keyStuff.spotifyKeys);

	spotify.search({ type: 'track', query: songname }, function(err, data) {
		if (!error) {
  			console.log(data);
  		}
	});
}


///movie this

var movieCall = function(movieName) {

	var movie = process.argv[3];

	request('http://www.omdbapi.com/?t=' + movie +'&apikey=40e9cece', function (error, response, body) {
		if (!error) { 
			var movieData = JSON.parse(body);
			// if (movieData.Title == process.argv[3])
			{
				console.log("Title: " + movieData.Title);
				console.log("Year: " + movieData.Year);
				console.log("Rating: " + movieData.Rated);
				console.log("Rotten Tomatoes: " + movieData.Ratings[1].Value);
				console.log("Country Produced: " + movieData.Country);
				console.log("Language: " + movieData.Language);
				console.log("Plot: " + movieData.Plot);
				console.log("Actors: " + movieData.Actors);
			}
		}
	});
}


// do-what-it-says
var doIt() = function() {

	//finish this function
}







// switch statement

var pick = function(caseDate, functionData) {
	switch(caseDate) {
		case 'my-tweets':
			twitterCall();
			break;
		case 'spotify-this-song':
			spotifyCall(functionData);
			break;
		case 'movie-this':
			movieCall();
			break;
		// case 'do-what-it-says':
		// 	doIt();
		// 	break;
		default:
		console.log('liri does not know that');
	}
}

//run with input! 

var runThis = function(argOne, argTwo) {
	pick(argOne, argTwo);
};



runThis(process.argv[2], process.argv[3]);

 


