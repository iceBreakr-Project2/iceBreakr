// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
console.log("heyeerhrhconnected");
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

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
  app.delete("/api/pref/:userpref", function(req, res) {
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

};