"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "All",
        },
        {
          name: "Adventure",
        },
        {
          name: "Music",
        },
        {
          name: "Food & Drink",
        },
        {
          name: "Charity",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
