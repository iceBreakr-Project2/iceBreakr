// Requiring our models
var db = require("../models");

// ice_breaker === db;
// models === matches, user,


module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) { //The reqeust is for the data located on the linked path/file,
      //which will display ...ALONGSIDE the result from teh request, if any... 
        //(the result will arrive as directed, typically in JSON format..)
    var queryDB = {};
    if (req.query.tag_id) {
      queryDB.AuthorId = req.query.tag_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
      where: queryDB,
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/tags/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // ..INSIDE THE include prop, we set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for (creatsaving a new post
  app.post("/api/tags", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/tags/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/tags", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};




//Post to database 

//get from database at id

//post to profile page