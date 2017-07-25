// At the top of the liri.js file, write the code you need to grab the data from keys.js. 
// Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var keyStuff = require("./keys.js")

var Twitter = require('twitter');

var spotify = require('spotify');
 
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

 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }
	, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
});




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
