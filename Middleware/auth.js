const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
  try {
    // const token = req.headers["authtoken"]
    const token = req.headers["authtoken"];
    console.log("token = " + token);
    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }
    const decoded = jwt.verify(token, "jwtsecret");
    console.log(decoded);
    req.user = decoded.user

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Token Invalid'",
    });
  }
};
