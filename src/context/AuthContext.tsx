import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string | null;
  login: (userId: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("spiderverse-auth") === "true";
  });
  const [userId, setUserId] = useState<string | null>(() => {
    return localStorage.getItem("spiderverse-user");
  });

  const login = (id: string, password: string) => {
    if (id.trim().length > 0 && password.trim().length > 0) {
      setIsAuthenticated(true);
      setUserId(id);
      localStorage.setItem("spiderverse-auth", "true");
      localStorage.setItem("spiderverse-user", id);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserId(null);
    localStorage.removeItem("spiderverse-auth");
    localStorage.removeItem("spiderverse-user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
