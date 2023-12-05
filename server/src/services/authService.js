const jwt = require("jsonwebtoken");
const db = require("../models");

const loginSuccessSvc = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await db.User.findOne({
        where: { id },
        raw: true,
      });

      const token =
        response &&
        jwt.sign(
          { id: response.id, email: response.email, role: response.role },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: "5d" }
        );

      resolve({
        err: token ? 0 : 3,
        msg: token ? "OK" : "User not found!",
        token,
      });
    } catch (error) {
      reject({
        err: 2,
        msg: "Fail at auth server " + error,
      });
    }
  });

module.exports = {
  loginSuccessSvc,
};
