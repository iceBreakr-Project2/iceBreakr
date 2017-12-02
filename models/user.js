console.log("connected to user.js - models");


// copied and pasted from activity 15, in case there is confusion. I did change the names
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING, //LOOK INTO REMOVING THIS.. just allowing Firebase to do the authentication to avoid access to passwords..
    online:  { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
 });

  // User.associate = function(models) {
  //   // Associating User with Preferences(maybe if thats what we end up doing)
  //   // When an User is deleted, also delete any associated Preferences
  //   User.hasMany(models.Preferences, {   
  //     onDelete: "cascade"
  //   });
  // };

return User;
};

//Data that was previously inside the user model
  ////////////////
    // gender: DataTypes.STRING,
    // sexualPref: DataTypes.STRING,
    // language: DataTypes.STRING, //Fluents only
    // interests: DataTypes.TEXT
////////////////
    // ageRangeHigh: DataTypes.INTEGER,
    // ageRangeLow: DataTypes.INTEGER,
   ////////////////
    // Add more columns as needed
