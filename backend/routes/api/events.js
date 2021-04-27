const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");
const { Category } = require("../../db/models");

router.get(
  "/events/:categoryId",
  asyncHandler(async (req, res) => {
    // Change to id of category when full cateogry databse frontend complete
    const categoryId = parseInt(req.params.categoryId);
    const events = Event.findAll({
      where: categoryId,
    });

    return res.json(events);
  })
);

module.exports = router;
