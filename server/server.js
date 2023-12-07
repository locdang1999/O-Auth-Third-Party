const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/connectDB");
const authRouter = require("./src/routers/authRouter");
const userRouter = require("./src/routers/userRouter");
require('./passport');

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.URL_CLIENT,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", (req, res) => {
//   return res.send("Hello World!");
// });
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

connectDB();

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log("Server is running on the port " + port);
});
