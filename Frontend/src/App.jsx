/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./home/Home";
import Course from "./courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./contact/contact";
import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth(AuthProvider);
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Course /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
