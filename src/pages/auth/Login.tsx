import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!employeeId || !password) {
      alert("Please enter Employee ID and Password");
      return;
    }

    try {
      const user = await loginUser(employeeId, password);

      // ✅ Save logged-in user & role in context
      setUser(user);

      // ✅ Redirect based on role
      if (user.role === "employee") {
        navigate("/employee/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      alert("Invalid Employee ID or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "white",
          width: "380px",
          padding: "28px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
          Welcome Back
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#64748b",
            marginBottom: "20px",
          }}
        >
          Sign in to access your HRMS portal
        </p>

        {/* EMPLOYEE ID */}
        <label style={{ fontSize: "12px", fontWeight: 500 }}>
          Employee ID
        </label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter your ID"
          style={inputStyle}
        />

        {/* PASSWORD */}
        <label style={{ fontSize: "12px", fontWeight: 500 }}>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          style={inputStyle}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Sign In
        </button>

        {/* BACK LINK */}
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            marginTop: "16px",
            color: "#64748b",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          ← Back to Public Portal
        </p>
      </div>
    </div>
  );
}

/* ---------- shared styles ---------- */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginTop: "6px",
  marginBottom: "14px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  background: "#f8fafc",
  fontSize: "14px",
  outline: "none",
};
