const authSvc = require("../services/authService");

const loginSuccess = async (req, res) => {
  const { id } = req?.body;

  try {
    if (!id) {
      res.status(400).json({
        err: 1,
        msg: "Missing inputs",
      });
    }

    let response = await authSvc.loginSuccessSvc(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Fail at auth controller " + error,
    });
  }
};

module.exports = {
  loginSuccess,
};
