const router = require("express").Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");


router.get("/getInfo",verifyToken, userController.getUserInfo);

module.exports = router;