'use strict';


// Dependency / Requires 
//===================================================================================================
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');

var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};


if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  var config    = require(__dirname + '/../config/config.json')[env];
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// File-System Process
//========================================================================================================
fs
  .readdirSync(__dirname)
   .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); //FS filters through files and locates the js files..
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file)); //FS imports the js files (the model files) in the Config Directory...
    db[model.name] = model; 
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// FILLS AND EXPORTS THE "db"
//=====================================================================================================================
db.sequelize = sequelize; //this references the DB Environment
db.Sequelize = Sequelize; // this references the Sequelize npm packages and thus all the methods and use cases in the js files..

module.exports = db;
