import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/authService";

type Role = "public" | "employee" | "admin";

interface AuthContextType {
  role: Role;
  user: any;
  isAuthenticated: boolean;
  setUser: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<any>(null);
  const [role, setRole] = useState<Role>("public");

  /* 🔁 Restore session on refresh */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUserState(currentUser);
          setRole(currentUser.role);
        }
      } catch {
        setUserState(null);
        setRole("public");
      }
    };
    checkAuth();
  }, []);

  /* 🔥 IMPORTANT FIX */
  const setUser = (user: any) => {
    setUserState(user);
    setRole(user?.role || "public");
  };

  const logout = async () => {
    await logoutUser();
    setUserState(null);
    setRole("public");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: role !== "public",
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
