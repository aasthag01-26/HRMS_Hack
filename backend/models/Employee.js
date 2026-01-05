// models/Employee.js
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true }, // emp001, emp002...
  name: { type: String, required: true },
  role: { type: String, enum: ["admin","employee"], required: true },

  // Personal details
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  department: { type: String },
  designation: { type: String },
  dateOfJoining: { type: Date },
  address: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
