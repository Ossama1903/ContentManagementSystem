const express = require("express");
const signup = require("../controllers/users/signup");
const login = require("../controllers/users/login");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify-token", verifyToken, (req, res) => {
  res.status(200).json({ message: "token valid" });
});

module.exports = router;
