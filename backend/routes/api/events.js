const express = require("express");
const router = express.Router();
const { restoreUser } = require("../../utils/auth");
const asyncHandler = require("express-async-handler");
const { Event } = require("../../db/models");
const { Category } = require("../../db/models");
const { Registration } = require("../../db/models");
const { Op } = require("sequelize");

router.get(
  "/:eventId(\\d+)",
  asyncHandler(async (req, res) => {
    const eventId = req.params.eventId;
    console.log("HELLO FROM GET EVENTS", eventId);
    const event = await Event.findByPk(eventId);
    return res.json(event);
  })
);

router.get(
  "/registrations",
  restoreUser,
  asyncHandler(async (req, res) => {
    const userId = req.user.id;
    console.log("HELLO FRON REGISTRATIONS!!");
    const registrations = await Registration.findAll({
      where: { userId },
    });
    const eventIds = registrations.map((reg) => reg.eventId);
    console.log(eventIds);
    const events = await Event.findAll({
      where: {
        id: {
          [Op.in]: eventIds,
        },
      },
    });
    return res.json(events);
  })
);

router.post(
  "/:eventId/registration",
  restoreUser,
  asyncHandler(async (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.user.id;
    const registeredEvent = await Registration.create({
      userId,
      eventId,
    });

    const event = await Event.findByPk(registeredEvent.eventId);
    return res.json(event);
  })
);

router.delete(
  "/:eventId/registration",
  restoreUser,
  asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const eventId = req.params.eventId;
    await Registration.destroy({
      where: { eventId, userId },
    });

    res.json(eventId);
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
