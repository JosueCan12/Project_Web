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
import PageUpdate from "./pages/PageUpdate";
import PageError from "./pages/PageError";
import PageUpdateFlavor from "./pages/PageUpdateFlavor";
import PageUpdateDesign from "./pages/PageUpdateDesign";
import PageUpdateStuffing from "./pages/PageUpdateStuffing";
import ComponentRegister from "./components/ComponentRegister";

function App() {
  const { isLoggedIn, rol } = useAuth();

  return (
    <div className="">
      <Routes>
        <Route index element={<Login />} />
      </Routes>

      <div className=" relative">
        {isLoggedIn ? <Navbar /> : null}
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
            <Route path="/pedidos" element={<PagePedidos />} />
            <Route path="/ingredients" element={<PagesIngredientes />} />
            <Route path="/ingredients/size" element={<PageBreadSize />} />
            <Route path="/ingredients/size/:id" element={<PageUpdate />} />
            <Route path="/ingredients/flavor" element={<PageBreadFlavor />} />
            <Route
              path="/ingredients/flavor/:id"
              element={<PageUpdateFlavor />}
            />

            <Route path="/ingredients/design" element={<PageDesign />} />
            <Route
              path="/ingredients/design/:id"
              element={<PageUpdateDesign />}
            />
            <Route path="/ingredients/stuffing" element={<PageStuffing />} />
            <Route
              path="/ingredients/stuffing/:id"
              element={<PageUpdateStuffing />}
            />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAllowed={(isLoggedIn && rol === "admin") || rol === "seller"}
                redirectTo="/pedidos"
              />
            }
          >
            
            <Route path="/usuarios" element={<PageUsuarios />} />
            {/*  <Route path="*" element={<PageError />} /> */}
            {/*  <Route path="/register" element={<ComponentRegister />} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
