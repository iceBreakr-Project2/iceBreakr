// Dependencies

console.log("connected to user-api-routes \n");

// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  //Getting all Users
  app.get("/api/users/all", function(req, res) {
    db.User.findAll({})
    .then(function(results) {
      console.log(results); //node ref
      res.json(results);
    });
  });

  // Add a User
  app.post("/api/users", function(req, res) {
    console.log("\n\n User Data = ");
    console.log(req.body);
    console.log("\n");

    db.user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password

    }).then(function(results) {
      // res.json(results);
      console.log("redirecting to profileupdate");
      // res.redirect("/profileupdate"); //routing should occur through the <href> link in html
      //location.assign("/main");/
    });    
  });

  // Deleting a User
  app.post("/api/users/:user", function(req, res) {
    console.log("User Data = ");
    console.log(req.body);

    db.user.delete({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: req.body.dob,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password

    }).then(function(results) {
      res.json(results);
    });    
  });

/////////////////////////////////////////////////////////
//TAGS:
//=======
// Adding tags and gender pref
  app.post("/api/pref", function(req, res) {
    console.log("\n\n User Data = ");
    console.log(req.body);
    console.log("\n");

    db.preferences.create({
      gender: req.body.gender,
      sexualPref: req.body.sexualPref,
      language: req.body.language,
      interests: req.body.interests

    }).then(function(results) {
      //results.redirect("/profile");
      // `results` here would be the newly created preferences
      console.log("redirecting to /profile");
    });    
  });

  app.get("/api/pref", function(req, res) {
    db.preferences.findAll({})
    .then(function(results) {
      console.log(results); //node ref
      res.json(results);
    });
  });

  // Deleting a User's Tags
  app.post("/api/pref/:userpref", function(req, res) {
    console.log("\n\n User Data = ");
    console.log(req.body);
    console.log("\n");

    db.preferences.delete({
      gender: req.body.gender,
      sexualPref: req.body.sexualPref,
      language: req.body.language,
      interests: req.body.interests

    }).then(function(results) {
      res.json(results);
    });    
  });

};


