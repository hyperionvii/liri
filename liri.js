// At the top of the liri.js file, write the code you need to grab the data from keys.js. 
// Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var keyStuff = require("./keys.js")

var Twitter = require('twitter');

var spotify = require('node-spotify-api');


 
var client = new Twitter(keyStuff.twitterKeys);

var twitterCall = function() {

	var params = {screen_name: 'liriFiaCat'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    // console.log(tweets);
	    for (var i = 0; i < tweets.length; i++) {
	    	console.log(tweets[i].created_at);
	    	console.log(" ");
	    	console.log(tweets[i].text);
	    }
	  }
	});
}


var pick = function(caseDate, functionData) {
	switch(caseDate) {
		case 'my-tweets':
			twitterCall();
			break;
		default:
		console.log('liri does not know that');
	}
}

var runThis = function(argOne, argTwo) {
	pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);




////spotify



var clientSpot = new spotify(keyStuff.spotifyKeys);
 
var spotifyCall = function () {

	clientSpot.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  	if (err) {
    	return console.log('Error occurred: ' + err);
  	} else {
  		console.log(data);
  	}
	});
};

spotifyCall();