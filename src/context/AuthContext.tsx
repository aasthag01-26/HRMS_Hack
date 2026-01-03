import { createContext, useContext, useState } from "react";

type Role = "public" | "employee" | "admin";

interface AuthContextType {
  role: Role;
  isAuthenticated: boolean;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role>("public");

  const login = (selectedRole: Role) => setRole(selectedRole);
  const logout = () => setRole("public");

  return (
    <AuthContext.Provider
      value={{
        role,
        isAuthenticated: role !== "public",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
