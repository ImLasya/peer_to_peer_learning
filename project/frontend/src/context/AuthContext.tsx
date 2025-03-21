import React, { createContext, useState, useContext } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'senior' | 'junior'; // User role
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, role: 'senior' | 'junior') => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: 'senior' | 'junior') => {
    // Perform login logic (e.g., API call)
    // For demo purposes, assume login is successful
    setIsLoggedIn(true);
    setUser({ id: '1', name: 'John Doe', email, role });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the useAuth hook
export const useAuth = () => useContext(AuthContext);