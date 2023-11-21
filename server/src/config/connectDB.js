const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("oauth_test", "root", process.env.PASSWORD_DB, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connectDB = async () => {
  // const sequelize = new Sequelize(
  //   "oauth_test",
  //   "root",
  //   process.env.PASSWORD_DB,
  //   {
  //     host: "localhost",
  //     dialect: "mysql",
  //     logging: false,
  //   }
  // );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;
