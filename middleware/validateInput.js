// middleware/validateInput.js
const { body, validationResult } = require("express-validator");

const validateUpdateUser = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUpdateUser };
