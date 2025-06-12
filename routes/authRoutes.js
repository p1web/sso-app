// routes/authRoutes.js
const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");

const router = express.Router();

// Start Google OAuth2 login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback after Google login
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  authController.googleAuthSuccess
);

// On failure
router.get("/failure", authController.googleAuthFailure);

module.exports = router;
