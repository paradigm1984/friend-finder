// LOOK INTO: https://github.com/lvanok/FriendFinder
// ALSO: https://github.com/lvanok/FriendFinder/blob/master/app/routing/api-routes.js
var express = require("express");
var friendData = require("../Data/friends.js");
var path = require("path");

module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){

		var userInput = req.body;
		var userResponses = userInput.scores;

		var matchName = "";
		var matchImage = "";
		var totalDifference = 5000; // Make the initial value big for comparison

		for (var i = 0; i < friends.length; i++) {
			console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});

};
