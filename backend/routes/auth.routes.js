const express = require("express");
const passport = require("passport");

const router = express.Router();

/* LOGIN */
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    _id: req.user._id,
    employeeId: req.user.employeeId,
    role: req.user.role,
    name: req.user.name,
  });
});

/* LOGOUT */
router.post("/logout", (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out" });
  });
});

/* CURRENT USER */
router.get("/me", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json(req.user);
});

module.exports = router;
