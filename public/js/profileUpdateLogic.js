$(function() {
  $("#create-account").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var interestsArray = ($("#interests").val().trim());
    var interests = interestsArray.toString();

    var userInfo = {
      gender: $("#userGender").val().trim(),
      sexualPref: $("#genderPref").val().trim(),
      language: $("#langPref").val().trim(),
      interests: interests
    };

    // Send the POST request.
    $.ajax("/api/pref", {
      type: "POST",
      data: userInfo
    }).then(
      function() {
        console.log("created new user");
        location.assign("/profile");
        // location.reload();  // Reload the page to get the updated list
      }
    );
  });

  $("#delete-account").on("click", function(event) {
    // Send the DELETE request.
    $.ajax("/api/users/:user", {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted user");     
      }
    );

    $.ajax("/api/tags/:userpref", {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted user");
        location.assign("/main");// Reload the page to get the updates  
      }
    );
  });
  
});

  // $("#update-account").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();
  //   var interests = parse($("#interests").val().trim());

  //   var userInfoUpdate = {
  //     yourGender: $("#userGender").val().trim(),
  //     genderPref: $("#genderPref").val().trim(),
  //     langPref: $("#langPref").val().trim(),
  //     interests: interests
  //   };
  //   // Send the PUT(POST) request.
  //   $.ajax("/api/pref/", {
  //     type: "PUT",
  //     data: userInfoUpdate
  //   }).then(
  //     function() {
  //       console.log("updated quote");
  //       location.assign("/profileupdate");  // Reload the page (updated list should appear in the api/tags route)
  //     }
  //   );
  // });