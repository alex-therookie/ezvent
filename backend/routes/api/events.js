const express = require("express");
const router = express.Router();
const { restoreUser } = require("../../utils/auth");
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");
const { Category } = require("../../db/models");

router.get(
  "/:eventId",
  asyncHandler(async (req, res) => {
    // Change to id of category when full cateogry databse frontend complete
    console.log("HELLO FROM EVENTS GET");
    const eventId = req.params.eventId;
    const event = await Event.findByPk(eventId);
    return res.json(event);
  })
);

router.post(
  "/new",
  restoreUser,
  asyncHandler(async (req, res) => {
    const {
      title,
      description,
      date,
      location,
      photoUrl,
      categoryId,
    } = req.body;

    const { user } = req;

    const event = await Event.create({
      title,
      description,
      date,
      location,
      photoUrl,
      categoryId,
      userId: user.id,
    });

    return res.json(event);
  })
);

module.exports = router;
