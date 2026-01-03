import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role: "admin" | "employee";
}) {
  const { role: userRole } = useAuth();

  // not logged in
  if (userRole === "public") {
    return <Navigate to="/login" replace />;
  }

  // wrong role access
  if (userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
