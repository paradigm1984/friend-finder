
var friendData = require("../Data/friends.js");
var path = require("path");


module.exports = function(app) {

	// this populates the localhost:3000/api/friends
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res){

		// an object for a good match starting empty
		var goodMatch = {
			name: "",
			image: "",
			matchDifference: 500
		};

		console.log(req.body);
		var userData = req.body;



	});

};
