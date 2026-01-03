import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NotificationBell from "./NotificationBell";

export default function Navbar() {
  const { role } = useAuth(); // ✅ logout removed
  const location = useLocation();

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

      {/* CENTER SEARCH */}
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
          <NotificationBell role={role} />
          <span className="user-role">
            {role === "admin" ? "Admin Panel" : "Employee Portal"}
          </span>
        </div>
      )}
    </header>
  );
}
