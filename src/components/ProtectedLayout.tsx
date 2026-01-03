import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/layout.css";


export default function ProtectedLayout() {
  return (
    <div className="protected-wrapper">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
