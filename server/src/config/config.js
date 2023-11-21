const dotenv = require("dotenv");
dotenv.config();

const { PASSWORD_DB } = process.env;

module.exports = {
  development: {
    username: "root",
    // password: "Admin1234567@",
    password: PASSWORD_DB,
    database: "oauth_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false,
    // dialectOptions: {
    //   bigNumberStrings: true
    // }
  },
  //   test: {
  //     username: process.env.CI_DB_USERNAME,
  //     password: process.env.CI_DB_PASSWORD,
  //     database: process.env.CI_DB_NAME,
  //     host: '127.0.0.1',
  //     port: 3306,
  //     dialect: 'mysql',
  //     dialectOptions: {
  //       bigNumberStrings: true
  //     }
  //   },
  //   production: {
  //     username: "root",
  //     password: null,
  //     database: "oauth_test_product",
  //     host: process.env.PROD_DB_HOSTNAME,
  //     port: process.env.PROD_DB_PORT,
  //     dialect: 'mysql',
  //     dialectOptions: {
  //       bigNumberStrings: true,
  //       ssl: {
  //         ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
  //       }
  //     }
  //   }
};
