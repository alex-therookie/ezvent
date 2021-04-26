"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      date: DataTypes.DATE,
      location: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {}
  );
  Event.associate = function (models) {
    Event.belongsTo(models.User, { foreignKey: "userId" });
    Event.belongsTo(models.Category, { foreignKey: "categoryId" });

    const columnMappingRegs = {
      through: "Registration",
      otherKey: "userId",
      foreignKey: "eventId",
    };

    const columnMappingFavs = {
      through: "Favorite",
      otherKey: "userId",
      foreignKey: "eventId",
    };

    Event.belongsToMany(models.User, columnMappingRegs);
    Event.belongsToMany(models.User, columnMappingFavs);
  };
  return Event;
};
