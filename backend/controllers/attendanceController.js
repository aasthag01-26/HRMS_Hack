const Attendance = require("../models/Attendance");
const User = require("../models/User");

// 1️⃣ Employee Check-in
exports.checkIn = async (req, res) => {
  const { employeeId } = req.body;
  const today = new Date();
  today.setHours(0,0,0,0); // normalize date

  let record = await Attendance.findOne({ employeeId, date: today });

  if (!record) {
    record = new Attendance({
      employeeId,
      date: today,
      checkIn: new Date(),
      status: "present"
    });
  } else {
    return res.status(400).json({ message: "Already checked in today" });
  }

  await record.save();
  res.json({ message: "Check-in successful", record });
};

// 2️⃣ Employee Check-out
exports.checkOut = async (req, res) => {
  const { employeeId } = req.body;
  const today = new Date();
  today.setHours(0,0,0,0);

  let record = await Attendance.findOne({ employeeId, date: today });

  if (!record || !record.checkIn) {
    return res.status(400).json({ message: "Check-in required first" });
  }

  record.checkOut = new Date();
  await record.save();
  res.json({ message: "Check-out successful", record });
};

// 3️⃣ Admin marks leave
exports.markLeave = async (req, res) => {
  const { employeeId } = req.params;
  const { date } = req.body;
  const leaveDate = new Date(date);
  leaveDate.setHours(0,0,0,0);

  let record = await Attendance.findOne({ employeeId, date: leaveDate });
  if(!record){
    record = new Attendance({ employeeId, date: leaveDate, status:"on_leave" });
  } else {
    record.status = "on_leave";
  }
  await record.save();
  res.json({message:"Leave marked", record});
};

// 4️⃣ Summary: Today attendance counts
exports.todaySummary = async (req, res) => {
  const today = new Date();
  today.setHours(0,0,0,0);

  const presentCount = await Attendance.countDocuments({ date: today, status:"present" });
  const absentCount = await Attendance.countDocuments({ date: today, status:"absent" });
  const leaveCount = await Attendance.countDocuments({ date: today, status:"on_leave" });

  const totalEmployees = await User.countDocuments({ role:"employee" });
  const attendanceRate = (presentCount / totalEmployees) * 100;

  res.json({ presentCount, absentCount, leaveCount, attendanceRate });
};

// 5️⃣ Employee history
exports.employeeHistory = async (req,res)=>{
  const { employeeId } = req.params;
  const history = await Attendance.find({ employeeId }).sort({ date: -1 });
  res.json(history);
}
