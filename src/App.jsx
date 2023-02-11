import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PagesIngredientes from "./pages/PageIngredientes";
import PageUsuarios from "./pages/PageUsuarios";
import PagePedidos from "./pages/PagePedidos";
import Login from "./pages/PagesLogin";
import { useAuth } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/protected/ProtectedRoute";
import PageBreadSize from "./pages/PageBreadSize";
import PageBreadFlavor from "./pages/PageBreadFlavor";
import PageDesign from "./pages/PageDesign";
import PageStuffing from "./pages/PageStuffing";

function App() {
  const { isLoggedIn, rol } = useAuth();

  return (
    <div className="">
      <Routes>
        <Route index element={<Login />} />
      </Routes>

      <div className="flex">
        {isLoggedIn ? <Navbar /> : null}
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
            <Route path="/pedidos" element={<PagePedidos />} />
            <Route path="/ingredients" element={<PagesIngredientes />}>
              <Route path="size" element={<PageBreadSize />} />
              <Route path="flavor" element={<PageBreadFlavor />} />
              <Route path="design" element={<PageDesign />} />
              <Route path="stuffin" element={<PageStuffing />} />
            </Route>
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={isLoggedIn && rol === "admin"}
                redirectTo="/pedidos"
              />
            }
          >
            <Route path="/usuarios" element={<PageUsuarios />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
