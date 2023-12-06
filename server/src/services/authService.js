const jwt = require("jsonwebtoken");
const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const loginSuccessSvc = (id, tokenLogin) =>
  new Promise(async (resolve, reject) => {
    try {
      const tokenLoginNew = uuidv4();
      let response = await db.User.findOne({
        where: { id, tokenLogin },
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
        msg: token ? "OK" : "User not found or fail to login!",
        token,
      });

      if (response) {
        await db.User.update(
          { tokenLogin: tokenLoginNew },
          {
            where: { id },
          }
        );
      }
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
