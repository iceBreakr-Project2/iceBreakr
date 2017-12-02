// Dependencies

console.log("connected to user-api-routes \n");

//Firebase Admin SDK requires
var admin = require("firebase-admin");

var serviceAccount = require("../public/js/firebaseJSON.js");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ice-breaker-app-165bd.firebaseio.com"
});

// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  
    //Getting all Users
    app.get("/api/users/online", function(req, res) {//verify
      db.user.findAll({
        where: {
          online: true
        }
      })
      .then(function(results) {
        console.log(results); //node ref
        res.json(results);
      });
    });
    
    
    
    app.put("/api/users/online", function(req, res) {
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.user.update({
        online: req.body.online,
        //complete: req.body.complete
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(results) {
        res.json(results);
      });
    });
  


  
  
    app.get("/api/users", function(req, res) { //find a specific user
      db.user.findOne({
        // where: {
        //   online: true
        // }
        //ONLY WANT TO GET ONE USER'S INFO.. >>to navegate ot their email
      })
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
    app.delete("/api/users/:user", function(req, res) {
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
  }