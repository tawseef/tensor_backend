const httpStatus = require("http-status");

const validateLoginUser = (req, res, next) => {
  const { logIn } = req.body;
  if (logIn === "true") {
    next();
  } else {
    res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: "authentication error" });
  }
};

module.exports = { validateLoginUser };