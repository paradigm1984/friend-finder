
var path = require("path");
var friendData = require("../Data/friends.js");


module.exports = function(app) {

	// this populates the localhost:3000/api/friends
	app.get("/api/friends", function(req, res){
		res.json(friendData);

	});
	
	app.post("/api/friends", function(req, res){

		// an object for a good match starting empty
		var goodMatch = {
			name: "",
			photo: "",
			matchDifference: 500
		};

		var userData 	= req.body;
		// splits up the req.body
		var userName 	= userData.name;
		var userImage 	= userData.photo;
		var userScores 	= userData.scores;
		// console.log("user name: " + userName + ", " + "user image: " + userImage + ", " + "user scores: " + userScores);
		// console.log("------------------------------------------------------");
		var totalDifference = 0;

		for (var i = 0; i < friendData.length; i++) {
			// console.log(friendData[i].name);
			// console.log("------------------------------------------------------");

			for (var j = 0; j < userScores.length; j++) {
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
			}
			console.log("total difference: " + totalDifference);
			if (totalDifference <= goodMatch.matchDifference){

					// Reset the bestMatch to be the new friend. 
					goodMatch.name = friendData[i].name;
					a = friendData[i].photo;
					goodMatch.matchDifference = totalDifference;
					console.log(goodMatch);
			} // end if statement
		} // end for loop

		friendData.push(userData);
		res.json(goodMatch);

	}); // end app.post

}; // end module.exports
