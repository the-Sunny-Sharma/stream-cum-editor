import { useState } from "react";
import axios from "axios";

export default function CourseDetails() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hTitle = (e) => {
    setTitle(e.target.value);
  };
  const hDescription = (e) => {
    setDescription(e.target.value);
  };

  const addCourse = (eve) => {
    eve.preventDefault();
    console.log("Course added");
    const username = localStorage.getItem("username");
    let newCourse = {
      title,
      description,
      username,
    };
    let url = "http://localhost:9000/createCourse";
    axios
      .post(url, newCourse)
      .then((res) => {
        setTitle("");
        setDescription("");
      })
      .catch((err) => console.log("Issue: " + err));
  };

  return (
    <>
      <form onSubmit={addCourse}>
        <label for="title">TITLE:</label>
        <input type="text" value={title} onChange={hTitle} required></input>
        <label for="description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={hDescription}
          required
        ></input>

        <input type="submit" />
      </form>
    </>
  );
}
