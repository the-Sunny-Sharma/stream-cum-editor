import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleRole = (role) => {
    if (role === "student") {
      localStorage.setItem("role", "student");
      console.log("Signing in as Student");
      navigate(`/details/${role}`);
    } else if (role === "teacher") {
      localStorage.setItem("role", "teacher");
      console.log("Signing in as Teacher");
      navigate(`/details/${role}`);
    }
  };

  return (
    <>
      <h1>This is homepage</h1>
      <button onClick={() => handleRole("student")}>Sign-in as Student</button>
      <button onClick={() => handleRole("teacher")}>Sign-in as Teacher</button>
    </>
  );
}
