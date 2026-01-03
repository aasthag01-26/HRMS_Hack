// import ProtectedLayout from "../../components/ProtectedLayout";
// import StatCard from "./components/StatCard";
import StatCard from "../../components/StatCard";
import { useAuth } from "../../context/AuthContext";



export default function AdminDashboard() {
  const { role } = useAuth();
  return (
    <div className={`dashboard ${role === "admin" ? "admin-theme" : "employee-theme"}`}>
      <h2>Admin Dashboard</h2>
      <p className="subtitle">Overview of HR operations across all departments</p>

      <div className="grid-4">
        <StatCard title="Total Employees" value={172} sub="Across all departments" />
        <StatCard title="Present Today" value={158} sub="91.8% attendance" />
        <StatCard title="Pending Leave Requests" value={8} sub="Requires approval" color="orange" />
        <StatCard title="Open Grievances" value={5} sub="2 high priority" color="red" />
      </div>

      {/* RECENT / NEXT SECTIONS */}
      <div className="grid-2">
        <div className="recent-card">
          <h4>Pending Leave Requests</h4>
          <p>Engineering — 3</p>
          <p>Accounts — 2</p>
        </div>

        <div className="recent-card">
          <h4>Recent Grievances</h4>
          <p>
            Infrastructure
            <span className="badge badge-pending">Pending</span>
          </p>
          <p>
            IT Support
            <span className="badge badge-resolved">Resolved</span>
          </p>
        </div>
      </div>

    </div>
  );
}
