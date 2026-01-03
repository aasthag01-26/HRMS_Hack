import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

export default function PublicLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <PublicNavbar />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}
