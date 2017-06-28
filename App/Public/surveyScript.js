$(document).ready(function() {

	// on submit, make the modal appear with the name and photo of your best match.
	$("#submitRequest").on("click", function() {

		console.log("requested!!");
		// puts the user input into an object
		var userInput = {

			name: $("name").val().trim(),
			photo: $("photo").val().trim(),
			scores: [$('#question01').val().trim(), $('#question02').val().trim(), $('#question03').val().trim(), $('#question04').val().trim(), $('#question05').val().trim(), $('#question06').val().trim(), $('#question07').val().trim(), $('#question08').val().trim(), $('#question09').val().trim(), $('#question10').val().trim()]
		}

		// puts the current url into a variable
		var currentURL = window.location.origin;

		// uses jquery to make a post request
		$.post(currentURL + "/api/friends", userInput, function(data) {

			$("#userName").text(data.name);
			$("#userImage").attr("src", data.photo);
			$("#bestFriendModal").modal("toggle");
			console.log("posted!");
		});

		return false;

	});

});
