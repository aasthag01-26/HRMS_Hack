import { useState } from "react";
import "./attendance.css";

type Attendance = {
  id: string;
  name: string;
  department: string;
  checkIn: string;
  checkOut: string;
  status: "Present" | "Absent" | "On Leave";
};

const attendanceData: Attendance[] = [
  {
    id: "MC-2024-1234",
    name: "Rajesh Kumar",
    department: "Public Works",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present",
  },
  {
    id: "MC-2024-1235",
    name: "Priya Sharma",
    department: "Finance",
    checkIn: "09:15",
    checkOut: "18:30",
    status: "Present",
  },
  {
    id: "MC-2024-1236",
    name: "Amit Patel",
    department: "IT",
    checkIn: "-",
    checkOut: "-",
    status: "On Leave",
  },
  {
    id: "MC-2024-1237",
    name: "Sunita Verma",
    department: "Administration",
    checkIn: "09:05",
    checkOut: "18:00",
    status: "Present",
  },
  {
    id: "MC-2024-1238",
    name: "Rahul Singh",
    department: "Public Works",
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
  },
  {
    id: "MC-2024-1239",
    name: "Meera Joshi",
    department: "Finance",
    checkIn: "09:10",
    checkOut: "-",
    status: "Present",
  },
];

export default function Attendance() {
  const [search, setSearch] = useState("");

  const filteredData = attendanceData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="attendance-page">
      {/* HEADER */}
      <div className="attendance-header">
        <div>
          <h2>Attendance Management</h2>
          <p>Monitor and manage employee attendance</p>
        </div>

        <button className="primary-btn">⬇ Export Report</button>
      </div>

      {/* STATS */}
      <div className="attendance-stats">
        <StatCard label="Total Employees" value="172" />
        <StatCard label="Present Today" value="158" green />
        <StatCard label="Absent" value="6" red />
        <StatCard label="On Leave" value="8" orange />
      </div>

      {/* FILTER BAR */}
      <div className="attendance-filters">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select>
          <option>All Departments</option>
          <option>Finance</option>
          <option>IT</option>
          <option>Public Works</option>
        </select>

        <input type="date" />
      </div>

      {/* TABLE */}
      <div className="attendance-table">
        <h4>Today's Attendance - January 20, 2024</h4>

        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((emp) => (
              <tr key={emp.id}>
                <td className="link">{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.checkIn}</td>
                <td>{emp.checkOut}</td>
                <td>
                  <span
                    className={`status ${emp.status
                      .replace(" ", "")
                      .toLowerCase()}`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="view">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* SMALL COMPONENT */
function StatCard({
  label,
  value,
  green,
  red,
  orange,
}: {
  label: string;
  value: string;
  green?: boolean;
  red?: boolean;
  orange?: boolean;
}) {
  return (
    <div className="stat-card">
      <h3
        className={
          green ? "green" : red ? "red" : orange ? "orange" : ""
        }
      >
        {value}
      </h3>
      <p>{label}</p>
    </div>
  );
}
