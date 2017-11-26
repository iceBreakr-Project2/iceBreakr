// copied and pasted from activity 15, in case there is confusion. I did change the names
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    // Giving the User model a name of type STRING
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    ageRangeHigh: DataTypes.INTEGER,
    ageRangeLow: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    sexualPref: DataTypes.STRING,
    language: DataTypes.STRING, //Fluents only
    interests: DataTypes.TEXT

    // Add more columns as needed
  });

  // Author.associate = function(models) {
  //   // Associating User with Info(maybe if thats what we end up doing)
  //   // When an User is deleted, also delete any associated Info
  //   Author.hasMany(models.Data, {
  //     onDelete: "cascade"
  //   });
  // };

return User;

};
