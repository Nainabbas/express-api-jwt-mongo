const User = require("../models/user.model");
var jwt = require("jsonwebtoken");

exports.register = async function register(req, res) {
  const { name, email, password } = req.body;
  let user = new User({ name, email, password });
  try {
    await user.save();
    return res.json(user);
  } catch (err) {
    return res.json({ error: err.message });
  }
};

exports.login = async function login(req, res) {
  try {
    const { email, password } = req.body;
    //find the user
    let user = await User.findOne({ email, password });
    //check weather the user is found
    if (user) {
      delete user.password;
      user = await user.toJSON();
      //genrate a jwt token
      var token = await jwt.sign(user, process.env.JWT_SECRET);
      return res.json({ status: "sccuess", token });
    }
    return res.status(401).json({ status: "failed" });
  } catch (err) {
    return res.status(400).json({ status: "error", error: err.message });
  }
};
