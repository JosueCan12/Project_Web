import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login  from './pages/Login'; 

function App() {
  return (  
  <div className="">
    <Routes>
          <Route  path="/" element={<Login/>}/>
    </Routes>
  </div>
  );
}

export default App;
