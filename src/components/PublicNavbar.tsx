import { NavLink } from "react-router-dom";
import "./PublicNavbar.css";

export default function PublicNavbar() {
  return (
    <header className="public-navbar">
      <div className="logo">
        <strong>Municipal Corporation</strong>
        <span>HRMS Public Portal</span>
      </div>

      <nav className="nav-links">
        {/* <NavLink
  to="/"
  end
  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }
>
  Home
</NavLink> */}

        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/" end>Home</NavLink> ✅ */}

        <NavLink to="/notices">Notices</NavLink>
        <NavLink to="/policies">Policies</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>

      <NavLink to="/login" className="login-btn">
        Employee / Admin Login
      </NavLink>
    </header>
  );
}
