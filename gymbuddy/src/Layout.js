import React from "react";
import Navbar from "./components/navbar/navbar";
import "./layout.css";
import { Routes, Route } from "react-router-dom";
import {
  Administration,
  Login,
  Register,
  Home,
  Edit,
  Profile,
} from "./containers/index";
function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/administration" element={<Administration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default Layout;
