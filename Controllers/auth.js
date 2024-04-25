const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, password , fullname, email } = req.body;
    // 1 check if user already exists
    let user = await User.findOne({ name });
    if (user) {
      return res.status(400).send("User already exists");
    }
    // 2 encrypt
    const salt = await bcrypt.genSalt(10);
    user = new User({ name, password , fullname, email });
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
    // res.send("login ok");
    // 1. chek user
    const { name, password } = req.body;
    let user = await User.findOneAndUpdate({ name }, { new: true });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send("Invalid password");
      }
      // 2. payload
      let payload = { user: user.name, fullname: user.fullname, email: user.email};
      // 3. generate token (10 วิ) Eg: 60, "2 days", "10h", "7d"
      jwt.sign(payload, "jwtsecret", { expiresIn: 20 }, (err, token) => {
        if (err) {
          return res.status(400).send("Invalid token");
        }
        // res.send(token);
        console.log(jwt.expiresIn)
        res.json({ token, payload });
        
      });
    } else {
      return res.status(400).send("User not found");
    }

    // res.send("login ok");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
