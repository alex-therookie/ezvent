const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");
const { Category } = require("../../db/models");

router.get(
  "/:categoryId(\\d)",
  asyncHandler(async (req, res) => {
    // Change to id of category when full cateogry databse frontend complete
    const categoryId = req.params.categoryId;
    console.log(categoryId);
    const events = await Event.findAll({
      where: { categoryId },
    });
    return res.json(events);
  })
);

router.get(
  "/categories",
  asyncHandler(async (req, res) => {
    const categories = await Category.findAll();

    return res.json(categories);
  })
);

module.exports = router;
