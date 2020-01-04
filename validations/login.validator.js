var Joi = require("joi");

module.exports = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{5,30}/)
      .required()
  }
};
