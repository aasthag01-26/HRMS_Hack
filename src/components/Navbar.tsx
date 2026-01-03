import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NotificationBell from "./NotificationBell";

export default function Navbar() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  
// Hide search on specific pages
  const hideSearch = [
    "/employee/profile",
    "/employee/payroll",
    "/admin/payroll",
  ].some(path => location.pathname.startsWith(path));

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <strong>Municipal Corporation – HRMS</strong>
      </div>

      {/* CENTER SEARCH (only for logged users) */}
      {role !== "public" && !hideSearch && (
  <div className="navbar-center">
    <input
      type="text"
      placeholder={
              role === "admin"
                ? "Search employees..."
                : "Search services..."
            }
            className="navbar-search"
          />
        </div>
)}


      {/* RIGHT */}
      {role !== "public" && (
        <div className="navbar-right">
          {/* 🔔 Notification */}
          <NotificationBell role={role} />

          <span className="user-role">
             {role === "admin" ? "Admin Panel" : "Employee Portal"}
          </span>

          
        </div>
      )}
    </header>
  );
}
