import { useState } from "react";
import "./employees.css";

type Employee = {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: "Present" | "Absent" | "On Leave";
};

const initialEmployees: Employee[] = [
  {
    id: "MC-2024-1234",
    name: "Rajesh Kumar",
    role: "Senior Engineer",
    department: "Public Works",
    email: "rajesh.kumar@municipal.gov.in",
    phone: "+91 98765 43210",
    status: "Present",
  },
  {
    id: "MC-2024-1235",
    name: "Priya Sharma",
    role: "Accounts Officer",
    department: "Finance",
    email: "priya.sharma@municipal.gov.in",
    phone: "+91 98765 43211",
    status: "Present",
  },
  {
    id: "MC-2024-1236",
    name: "Amit Patel",
    role: "System Administrator",
    department: "IT",
    email: "amit.patel@municipal.gov.in",
    phone: "+91 98765 43212",
    status: "On Leave",
  },
  {
    id: "MC-2024-1237",
    name: "Sunita Verma",
    role: "Admin Officer",
    department: "Administration",
    email: "sunita.verma@municipal.gov.in",
    phone: "+91 98765 43213",
    status: "Present",
  },
  {
    id: "MC-2024-1238",
    name: "Rahul Singh",
    role: "Junior Engineer",
    department: "Public Works",
    email: "rahul.singh@municipal.gov.in",
    phone: "+91 98765 43214",
    status: "Absent",
  },
];

export default function Employees() {
  const [employees] = useState<Employee[]>(initialEmployees);
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employees-page">
      {/* HEADER */}
      <div className="employees-header">
        <div>
          <h2>Employee Directory</h2>
          <p>Manage all employees in the organization</p>
        </div>

        <button className="primary-btn">+ Add Employee</button>
      </div>

      {/* SEARCH BAR */}
      <div className="employees-filters">
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="secondary-btn">Filter by Department</button>
        <button className="secondary-btn">Export</button>
      </div>

      {/* EMPLOYEE CARDS */}
      <div className="employee-grid">
        {filteredEmployees.map((emp) => (
          <div className="employee-card" key={emp.id}>
            <div className="employee-top">
              <div className="avatar">
                {emp.name.charAt(0)}
              </div>

              <span className={`status ${emp.status.replace(" ", "").toLowerCase()}`}>
                {emp.status}
              </span>
            </div>

            <h4>{emp.name}</h4>
            <p className="role">{emp.role}</p>
            <p className="id">{emp.id}</p>

            <div className="employee-info">
              <span>{emp.department}</span>
              <span>{emp.email}</span>
              <span>{emp.phone}</span>
            </div>

            <div className="employee-actions">
              <button className="secondary-btn">View Profile</button>
              <button className="secondary-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
