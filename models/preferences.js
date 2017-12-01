console.log("\n connected to preferences.js - models");

// copied and pasted from activity 15, in case there is confusion. I did change the names, might not be perfect tho
module.exports = function(sequelize, DataTypes) {
  var Preferences = sequelize.define("preferences", {
      gender: DataTypes.STRING,
      sexualPref: DataTypes.STRING,
      language: DataTypes.STRING, //Fluents only
      interests: DataTypes.TEXT
    });

  // Preferences.associate = function(models) {
  //   // We're saying that a Info should belong to an Author
  //   // A Info can't be created without an Author due to the foreign key constraint
  //   Preferences.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Preferences;
};


 //Previous Data PLACED INSIDE this FILE....  Was this dummy data?
  // var Info = sequelize.define("info", {
  //   title: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [1]
  //     }
  //   },
  //   body: {
  //     type: DataTypes.TEXT,
  //     allowNull: false,
  //     len: [1]
  //   }
  // });