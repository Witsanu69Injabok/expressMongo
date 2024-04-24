const User = require("../Models/user");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;
    // 1 check if user already exists
    let user = await User.findOne({ name });
    if (user) {
      return res.status(400).send("User already exists");
    }
    // 2 encrypt
    const salt = await bcrypt.genSalt(10);
    user = new User({ name, password });
    user.password = await bcrypt.hash(password, salt);

    // 3 create new user
    await user.save();

    res.send("register successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    res.send("login ok");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
