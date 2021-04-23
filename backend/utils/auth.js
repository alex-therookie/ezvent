const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const { User } = require("../db/models");

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
  // Create the token.
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie("token", token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};

const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;
  console.log(token, "<------TOKEN");

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      console.log("ERROR");
      console.log(err);
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      console.log("HELLOOO", id);
      req.user = await User.scope("currentUser").findByPk(id);
    } catch (e) {
      console.log("IN THE CATCH!");
      res.clearCookie("token");
      return next();
    }

    if (!req.user) res.clearCookie("token");
    console.log("OVER HERE");
    return next();
  });
};

// If there is no current user, return an error
const requireAuth = [
  restoreUser,
  function (req, res, next) {
    if (req.user) return next();

    const err = new Error("Unauthorized");
    err.title = "Unauthorized";
    err.errors = ["Unauthorized"];
    err.status = 401;
    return next(err);
  },
];

module.exports = { setTokenCookie, restoreUser, requireAuth };