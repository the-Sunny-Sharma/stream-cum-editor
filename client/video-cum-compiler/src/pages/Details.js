import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hName = (e) => {
    setName(e.target.value);
  };
  const hUsername = (e) => {
    setUsername(e.target.value);
  };
  const hPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitDetails = (e) => {
    e.preventDefault();
    const role = localStorage.getItem("role");
    console.log("Name", name, "\nUsername ", username, "\nRole ", role);
    let details = {
      name,
      username,
      password,
      role,
    };
    let url = "http://localhost:9000/saveDetails";
    axios
      .post(url, details)
      .then((res) => {
        setName("");
        setUsername("");
        setPassword("");
        localStorage.setItem("username", username);
        if (role === "teacher") {
          navigate("/newCourse");
        }
      })
      .catch((err) => console.log("Issue: " + err));
  };

  return (
    <>
      <form onSubmit={submitDetails}>
        <label for="name">NAME:</label>
        <input type="text" value={name} onChange={hName} required></input>
        <label for="username">USERNAME:</label>
        <input
          type="text"
          value={username}
          onChange={hUsername}
          required
        ></input>
        <label for="password">PASSWORD:</label>
        <input
          type="password"
          value={password}
          onChange={hPassword}
          required
        ></input>
        <input type="submit" />
      </form>
    </>
  );
}
