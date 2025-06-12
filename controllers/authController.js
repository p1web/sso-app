// controllers/authController.js
const jwt = require("jsonwebtoken");

exports.googleAuthSuccess = (req, res) => {
  const token = jwt.sign(
    { id: req.user.id, email: req.user.email, name: req.user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // You can also redirect with token in query string if using pure HTML frontend
  res.redirect(`http://localhost:5000/profile.html?token=${token}`);
  
  // Or send JSON for frontend to handle
  // res.json({ token });
};

exports.googleAuthFailure = (req, res) => {
  res.status(401).json({ error: "Authentication failed" });
};
