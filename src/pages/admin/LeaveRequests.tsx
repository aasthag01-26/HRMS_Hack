import { useState } from "react";
import "./leave.css";

type Leave = {
  id: string;
  name: string;
  empId: string;
  department: string;
  type: string;
  duration: string;
  applied: string;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
};

const leaveData: Leave[] = [
  {
    id: "1",
    name: "Priya Sharma",
    empId: "MC-2024-1235",
    department: "Finance",
    type: "Casual Leave",
    duration: "2024-01-25 to 2024-01-26 (2 days)",
    applied: "2024-01-20",
    reason: "Personal work - family function",
    status: "Pending",
  },
  {
    id: "2",
    name: "Amit Patel",
    empId: "MC-2024-1236",
    department: "IT",
    type: "Sick Leave",
    duration: "2024-01-22 to 2024-01-22 (1 day)",
    applied: "2024-01-21",
    reason: "Not feeling well",
    status: "Pending",
  },
  {
    id: "3",
    name: "Sunita Verma",
    empId: "MC-2024-1237",
    department: "Administration",
    type: "Earned Leave",
    duration: "2024-02-01 to 2024-02-05 (5 days)",
    applied: "2024-01-18",
    reason: "Family vacation",
    status: "Pending",
  },
  {
    id: "4",
    name: "Rajesh Kumar",
    empId: "MC-2024-1234",
    department: "Public Works",
    type: "Casual Leave",
    duration: "2024-01-15 to 2024-01-16 (2 days)",
    applied: "2024-01-10",
    reason: "Personal work",
    status: "Approved",
  },
];

export default function LeaveRequests() {
  const [filter, setFilter] = useState("All");

  const filteredLeaves =
    filter === "All"
      ? leaveData
      : leaveData.filter((l) => l.status === filter);

  return (
    <div className="leave-page">
      {/* HEADER */}
      <div className="leave-header">
        <div>
          <h2>Leave Management</h2>
          <p>Review and manage leave requests</p>
        </div>
        <button className="outline-btn">⬇ Export Report</button>
      </div>

      {/* STATS */}
      <div className="leave-stats">
        <Stat label="Pending Approval" value="3" orange />
        <Stat label="Approved" value="1" green />
        <Stat label="Rejected" value="1" red />
      </div>

      {/* FILTERS */}
      <div className="leave-filters">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select>
          <option>All Departments</option>
          <option>Finance</option>
          <option>IT</option>
          <option>Administration</option>
        </select>
      </div>

      {/* LIST */}
      <div className="leave-list">
        <h4>Leave Requests</h4>

        {filteredLeaves.map((leave) => (
          <div key={leave.id} className="leave-card">
            <div className="leave-top">
              <div>
                <strong>
                  {leave.name} ({leave.empId})
                </strong>
                <span className={`badge ${leave.status.toLowerCase()}`}>
                  {leave.status}
                </span>
                <p className="muted">
                  {leave.department} • {leave.type}
                </p>
              </div>

              {leave.status === "Pending" && (
                <div className="actions">
                  <button className="reject">Reject</button>
                  <button className="approve">Approve</button>
                </div>
              )}
            </div>

            <div className="leave-info">
              <p>
                <strong>Duration:</strong> {leave.duration}
              </p>
              <p>
                <strong>Applied:</strong> {leave.applied}
              </p>
              <p>
                <strong>Reason:</strong> {leave.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* SMALL STAT CARD */
function Stat({
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
    <div className="stat-box">
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
