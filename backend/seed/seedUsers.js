const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect("mongodb://127.0.0.1:27017/hrms");

const seedUsers = async () => {
  await User.deleteMany();

  await User.register(
    {
      employeeId: "admin001",
      role: "admin",
      name: "HR Admin",
    },
    "adminji@123"
  );

  await User.register(
    { employeeId: "emp001", role: "employee", name: "Employee One" },
    "empji@123"
  );

  await User.register(
    { employeeId: "emp002", role: "employee", name: "Employee Two" },
    "empji@123"
  );

  await User.register(
    { employeeId: "emp003", role: "employee", name: "Employee Three" },
    "empji@123"
  );

  await User.register(
    { employeeId: "emp004", role: "employee", name: "Employee Four" },
    "emp123"
  );

  console.log("Users seeded successfully");
  process.exit();
};

seedUsers();
