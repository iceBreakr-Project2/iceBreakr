// copied and pasted from activity 15, in case there is confusion. I did change the names, might not be perfect tho
module.exports = function(sequelize, DataTypes) {
  var Info = sequelize.define("info", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Info.associate = function(models) {
  //   // We're saying that a Info should belong to an Author
  //   // A Info can't be created without an Author due to the foreign key constraint
  //   Info.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Info;
};
