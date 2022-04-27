import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import "./css/main.css";
import "./css/base.css";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
