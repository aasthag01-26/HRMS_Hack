const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: String, required: true }, // Which employee
  date: { type: Date, required: true, default: Date.now },
  checkIn: { type: Date },
  checkOut: { type: Date },
  status: { 
    type: String, 
    enum: ["present", "absent", "on_leave"], 
    default: "absent" 
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
