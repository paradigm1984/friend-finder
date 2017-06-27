// LOOK INTO: https://github.com/lvanok/FriendFinder
// ALSO: https://github.com/lvanok/FriendFinder/blob/master/app/routing/api-routes.js

var friendData = require("../friends.js");
var path = require("path");

module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){

		// makes an object for the perfect match
		var perfectMatch = {

			name: "",
			image: "",
			matchDifference: 500
		};

		// grabs the data inputted by the user and
		// assigns them variables
		var newFriendData = req.body;
		var newFriendName = userInput.name;
		var newFriendPhoto = userInput.photo;
		var newFriendScores = userInput.scores;

		var totalDifference = 0;

		for (var i = 0; i < [friends].length-1; i++) {
			
			console.log(friends[i].name);

			for (var a = 0; a < 10; a++) {

				// getting the total difference by subtracting the difference between each answer choice in teh array
				totalDifference += Math.abs(parseInt(newFriendScores[a]) - parseInt(friends[i].scores[a]));

				// if that difference is less than or equal to the matchDifference which it is because i set it high
				if(totalDifference <= perfectMatch.matchDifference) {

					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
				}

			}
		}	

		friends.push(newFriendData);
		res.json(greatMatch);
	});








