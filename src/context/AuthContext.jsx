import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");

  function login(name, id) {
    setUser(name);
    setUserId(id);
  }

  function logout() {
    setUser("");
    setUserId("");
  }

  return (
    <AuthContext.Provider value={{ user, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
