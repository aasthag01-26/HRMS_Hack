import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  role: "admin" | "employee";
};

export default function ProtectedRoute({ children, role }: Props) {
  const { role: userRole } = useAuth();

  // not logged in
  if (userRole === "public") {
    return <Navigate to="/login" replace />;
  }

  // wrong role
  if (userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
