import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./sidebar.css";

export default function Sidebar() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      {/* TOP MENU */}
      <div>
        <h4 className="sidebar-title">
          {role === "admin" ? "ADMIN MENU" : "EMPLOYEE MENU"}
        </h4>

        {role === "admin" && (
          <>
            <NavLink to="/admin/dashboard" className="sidebar-link">
              Dashboard
            </NavLink>
            <NavLink to="/admin/employees" className="sidebar-link">
              Employees
            </NavLink>
            <NavLink to="/admin/attendance" className="sidebar-link">
              Attendance
            </NavLink>
            <NavLink to="/admin/leave" className="sidebar-link">
              Leave Requests
            </NavLink>
            <NavLink to="/admin/payroll" className="sidebar-link">
              Payroll
            </NavLink>
            <NavLink to="/admin/grievance" className="sidebar-link">
              Grievances
            </NavLink>
          </>
        )}

        {role === "employee" && (
          <>
            <NavLink to="/employee/dashboard" className="sidebar-link">
              Dashboard
            </NavLink>
            <NavLink to="/employee/profile" className="sidebar-link">
              Profile
            </NavLink>
            <NavLink to="/employee/attendance" className="sidebar-link">
              Attendance
            </NavLink>
            <NavLink to="/employee/leave" className="sidebar-link">
              Leave
            </NavLink>
            <NavLink to="/employee/payroll" className="sidebar-link">
              Payroll
            </NavLink>
            <NavLink to="/employee/grievance" className="sidebar-link">
              Grievance
            </NavLink>
          </>
        )}
      </div>

      {/* LOGOUT AT BOTTOM */}
      <div className="sidebar-logout">
        <button onClick={handleLogout} className="logout-sidebar-btn">
          Logout
        </button>
      </div>
    </aside>
  );
}
