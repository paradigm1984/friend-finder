// Globals
var express = require("express");
var app = express ();
var PORT = process.env.PORT || 3000;

require('./app/routing/api-routes.js')(app);

// grabs the exported html route when the customer changes pages
require('./app/routing/html-routes.js')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//Starts server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

