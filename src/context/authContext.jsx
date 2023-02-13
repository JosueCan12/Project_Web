import { createContext, useState } from "react";
import { signIn, signUpWorker } from "../api/auth";
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

  const registerAccount = (body) => {
    return signUpWorker(body, token).then((res) => {
      console.log(res);
    });
  };

  return (
    <authContext.Provider value={{ login, token, logout, isLoggedIn, rol, registerAccount }}>
      {children}
    </authContext.Provider>
  );
}
