const express = require("express");
const router = express.Router();

const homeRouter = require("./home.router");
const usersRouter = require("./users.router");

/* GET home page. */
router.use("/", homeRouter);
router.use("/users", usersRouter);

module.exports = router;
