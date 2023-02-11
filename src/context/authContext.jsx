import { createContext, useState } from "react";
import { signIn } from "../api/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const authContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage("token", "");
  const [rol, setRol] = useLocalStorage("rol", "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token ? true : false);

  const login = async (form) => {
    try {
      const res = await signIn(form);
      const token = await res.data.token;
      const rol = await res.data.rol;
      const status = res.status;

      console.log(res.data);

      setRol(rol);
      setIsLoggedIn(true);
      setToken(token);
      return { status };
    } catch (error) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    }
  };

  const logout = () => {
    setToken("");
    setRol(null);
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider value={{ login, token, logout, isLoggedIn, rol }}>
      {children}
    </authContext.Provider>
  );
}
