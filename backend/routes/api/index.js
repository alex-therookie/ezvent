const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const eventsRouter = require("./events.js");
const categoriesRouter = require("./categories.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/events", eventsRouter);

router.use("/categories", categoriesRouter);

// GET /api/set-token-cookie (TEST)
// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "naruto",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// GET /api/require-auth
// const { requireAuth } = require("../../utils/auth.js");
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });

module.exports = router;
