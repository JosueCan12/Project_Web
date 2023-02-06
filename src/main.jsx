import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Widgets_Modal from "./widgets/Widgets_Modal";
import Login from './pages/Login';
import Component_Formulario from "./components/Component_Formulario";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <BrowserRouter>
       <App/>
      </BrowserRouter>
    </React.StrictMode>,
  )
