var path = require("path");


module.exports = function changePages(app) {

	app.get("/survey", function(req, res) {

		res.sendFile(path.join(__dirname + "/../survey.html"));
	});

	// if it cant find anything it will direct to the homepage. 
	app.use(function(req, res) {

		res.sendFile(path.join(__dirname + "/../home.html"));
	});

}


