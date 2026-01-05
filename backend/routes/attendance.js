const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

// Employee check-in
router.post("/checkin", attendanceController.checkIn);

// Employee check-out
router.post("/checkout", attendanceController.checkOut);

// Admin marks leave
router.patch("/mark-leave/:employeeId", attendanceController.markLeave);

// Summary today
router.get("/summary/today", attendanceController.todaySummary);

// Employee history
router.get("/history/:employeeId", attendanceController.employeeHistory);

module.exports = router;
