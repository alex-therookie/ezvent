"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          title: "Eminem Concert",
          description:
            "This is the best concert that eminem will ever make dont miss it!",
          date: new Date(),
          location: "4 Pennsylvania Plaza, New York, NY 10001, US",
          photoUrl:
            "https://media.cntraveler.com/photos/59ef91dd8d4f736d51415c2e/master/w_2667,h_2000,c_limit/7MileBeach-2013-HiRes.jpg",
          userId: 1,
          categoryId: 3,
        },
        {
          title: "White House Wine Testing",
          description: "Join us at the white house and taste the best wines!",
          date: new Date(),
          location: "1600 Pennsylvania Avenue NW, Washington, DC 20500, US",
          photoUrl:
            "https://media.cntraveler.com/photos/59ef91dd8d4f736d51415c2e/master/w_2667,h_2000,c_limit/7MileBeach-2013-HiRes.jpg",
          userId: 1,
          categoryId: 4,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
