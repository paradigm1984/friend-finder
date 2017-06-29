
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

		
		}

	});

};
