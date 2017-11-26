// Dependencies
console.log("connected");
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all users
  app.get("/api/all", function(req, res) {

    // Finding all Users, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.User.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a user
  app.post("/api/new", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    // db.user.create({
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   age: req.body.age,
    //   phoneNumber: req.body.phoneNumber,
    //   email: req.body.email,
    //   password: req.body.password
      
    // }).then(function(results) {
      // `results` here would be the newly created user
      res.redirect("/profile");
    // });
    
  });

  app.post("/api/new", function(req, res) {

    console.log("User Data:");
    console.log(req.body);

    db.user.create({
      name: "Lisa",
      gender: "female",
      age: 24,
      ageRangeHigh: 32,
      ageRangeLow: 25,
      phoneNumber: "123-456-7890",
      sexualPref: "female",
      language: "English, French, Spanish",
      interests: "dance kayaks hiking scuba-diving hunting traveling literature foreign-languages safaris jeeps"
    }).then(function(results) {
      // `results` here would be the newly created user
      res.send(results);
    });

  });

};

