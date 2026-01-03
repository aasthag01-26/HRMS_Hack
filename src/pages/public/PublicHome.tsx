import { Link } from "react-router-dom";

export default function PublicHome() {
  return (
    <>
      {/* HERO */}
      <div style={{
        background: "linear-gradient(90deg, #0B3C8C, #2F5FB3)",
        color: "white",
        margin: "24px",
        padding: "40px",
        borderRadius: "12px"
      }}>
        <h1>Municipal HRMS – Public Information Portal</h1>
        <p>
          Access public notices, HR policies, and department information of
          the Municipal Corporation.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/notices">
            <button style={{ padding: "10px 16px", marginRight: "10px" }}>
              View Notices
            </button>
          </Link>

          <Link to="/login">
            <button style={{
              padding: "10px 16px",
              border: "1px solid white",
              background: "transparent",
              color: "white"
            }}>
              Employee / Admin Login
            </button>
          </Link>
        </div>
      </div>

      {/* OVERVIEW */}
      <div style={{ display: "flex", gap: "20px", padding: "0 24px" }}>
        <OverviewCard title="Total Departments" value="12" />
        <OverviewCard title="Total Employees" value="1,245" />
        <OverviewCard title="Active Notices" value="8" />
      </div>

      {/* QUICK ACCESS */}
      <div style={{ padding: "24px" }}>
        <h3>Quick Access</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <QuickCard title="Public Notices" link="/notices" />
          <QuickCard title="Policies & Circulars" link="/policies" />
          <QuickCard title="Department Directory" link="/departments" />
        </div>
      </div>
    </>
  );
}

function QuickCard({ title, link }: { title: string; link: string }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "100%",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
      <Link to={link}>
        <button style={{ marginTop: "10px" }}>Open</button>
      </Link>
    </div>
  );
}
function OverviewCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}
