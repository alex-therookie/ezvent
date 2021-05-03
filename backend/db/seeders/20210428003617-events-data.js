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
            "https://silviacelestescicchitano.files.wordpress.com/2018/10/36858995_10217246605662945_5157271809912995840_n.jpg?w=1060",
          userId: 1,
          categoryId: 3,
        },
        {
          title: "White House Wine Testing",
          description: "Join us at the white house and taste the best wines!",
          date: new Date(),
          location: "1600 Pennsylvania Avenue NW, Washington, DC 20500, US",
          photoUrl:
            "https://www.whitehouse.gov/wp-content/uploads/2021/01/about_the_white_house.jpg",
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
