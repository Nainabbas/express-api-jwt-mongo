const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const registerValidator = require("../validations/register.validator");
const loginValidator = require("../validations/login.validator");
const userController = require("../controllers/user.controller");

router.post("/register", validate(registerValidator), userController.register);
router.post("/login", validate(loginValidator), userController.login);

module.exports = router;
