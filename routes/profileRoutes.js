const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.get("/profile", verifyJWT, (req, res) => {
  res.json({ message: "Secure profile data", user: req.user });
});

module.exports = router;
