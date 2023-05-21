import React, { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Student Added");
        setName("");
        setAge("");
        setGender("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <h3>Add Student</h3>
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label Htmlfor="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label Htmlfor="age" className="form-label">
            Student Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label Htmlfor="gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
