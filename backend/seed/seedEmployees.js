const mongoose = require("mongoose");
const Employee = require("../models/Employee");

mongoose.connect("mongodb://127.0.0.1:27017/hrms");

const seedEmployees = async () => {
  await Employee.deleteMany(); // purane data delete

  await Employee.create([
    {
      employeeId: "emp001",
      name: "Employee One",
      role: "employee",
      email: "emp1@example.com",
      phone: "9876543210",
      department: "IT",
      designation: "Developer",
      dateOfJoining: new Date("2024-01-01"),
      address: "Delhi"
    },
    {
      employeeId: "emp002",
      name: "Employee Two",
      role: "employee",
      email: "emp2@example.com",
      phone: "9876543211",
      department: "HR",
      designation: "HR Executive",
      dateOfJoining: new Date("2024-02-01"),
      address: "Noida"
    },
    {
      employeeId: "emp003",
      name: "Employee Three",
      role: "employee",
      email: "emp3@example.com",
      phone: "9876543212",
      department: "Finance",
      designation: "Accountant",
      dateOfJoining: new Date("2024-03-01"),
      address: "Gurgaon"
    },
    {
      employeeId: "emp004",
      name: "Employee Four",
      role: "employee",
      email: "emp4@example.com",
      phone: "9876543213",
      department: "Marketing",
      designation: "Manager",
      dateOfJoining: new Date("2024-04-01"),
      address: "Faridabad"
    }
  ]);

  console.log("Employees seeded successfully");
  process.exit();
};

seedEmployees();
