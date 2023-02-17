import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser";
import { Navigation, UsersPage } from "./components";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="dashboard" element={<UsersPage />} />
      </Routes>
    </div>
  );
}