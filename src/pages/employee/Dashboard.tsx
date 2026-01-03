// import ProtectedLayout from "../../components/ProtectedLayout";
import { useAuth } from "../../context/AuthContext";

export default function EmployeeDashboard() {
  const { role } = useAuth();
  return (
    <div className={`dashboard ${role === "admin" ? "admin-theme" : "employee-theme"}`}>
      <h2>Welcome, Rajesh Kumar</h2>
      <p className="subtitle">Here’s an overview of your HR information</p>

      {/* TOP STATS */}
      <div className="grid-4">
        <InfoCard title="Attendance" value="92%" sub="This month" />
        <InfoCard title="Leave Balance" value="12" sub="Days remaining" />
        <InfoCard title="Salary Status" value="Paid" sub="December 2024" />
        <InfoCard title="Active Complaints" value="1" sub="Pending" />
      </div>

      {/* RECENT SECTIONS */}
      <div className="grid-2">
        <RecentLeaves />
        <RecentGrievances />
      </div>

      {/* QUICK ACTIONS */}
      <h3>Quick Actions</h3>
      <div className="quick-actions">
        <div className="quick-action-card">Apply Leave</div>
        <div className="quick-action-card">Mark Attendance</div>
        <div className="quick-action-card">View Payslip</div>
        <div className="quick-action-card">File Grievance</div>
      </div>

    </div>
  );
}
function InfoCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <div className="stat-value">{value}</div>
      <p className="stat-sub">{sub}</p>
    </div>
  );
}

function RecentLeaves() {
  return (
    <div className="recent-card">
      <h4>Recent Leave Requests</h4>

      <p>
        Casual Leave
        <span className="badge badge-approved">Approved</span>
      </p>

      <p>
        Sick Leave
        <span className="badge badge-pending">Pending</span>
      </p>
    </div>
  );
}

function RecentGrievances() {
  return (
    <div className="recent-card">
      <h4>Recent Grievances</h4>

      <p>
        Infrastructure
        <span className="badge badge-resolved">Resolved</span>
      </p>

      <p>
        IT Support
        <span className="badge badge-pending">Pending</span>
      </p>
    </div>
  );
}
  


