// copied and pasted from activity 15, in case there is confusion. I did change the names
module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("matches", {
    // Giving the Matches model a name of type STRING
    
    // Add more columns as needed
  });

  // Author.associate = function(models) {
  //   // Associating User with Info(maybe if thats what we end up doing)
  //   // When an User is deleted, also delete any associated Info
  //   Author.hasMany(models.Data, {
  //     onDelete: "cascade"
  //   });
  // };

  return Matches;
  
};