"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: {
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false,
      },
    },
    {}
  );
  Category.associate = function (models) {
    Category.hasMany(models.Event, { foreignKey: "categoryId" });
  };
  return Category;
};
