const User = require("../models/user.model");
var jwt = require("jsonwebtoken");

exports.index = async function(req, res) {
  const { token } = req.headers;
  //check if token was sent or not
  if (token) {
    try {
      //verify the token provided by with request
      var user = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
    return res.json({ data: "top secret data", user });
  }
  return res.status(400).json({ message: "no token was provided" });
};
