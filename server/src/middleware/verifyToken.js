const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req?.headers?.token;

  if (!token) {
    return res.status(200).json({
      err: 1,
      msg: "You are not logged in!",
    });
  }

  const accessToken = token.split(" ")[1];

  await jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, decode) => {
    if (err) {
      return res.status(200).json({
        err: 1,
        msg: "Token is not found!",
      });
    }
    req.currentUser = decode;
    next();
  });
};

module.exports = verifyToken;
