import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateStudent() {
  const initialState = {
    name: "",
    age: "",
    gender: "",
  };

  const [updatedStudent, setUpdatedStudent] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    getStudent(id);
  }, [id]);

  const getStudent = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8070/student/get/${id}`
      );
      console.log(response.data.user);
      setUpdatedStudent(response.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  function updateStudent() {
    axios
      .put(`http://localhost:8070/student/update/${id}`, updatedStudent)
      .then((res) => {
        console.log(updatedStudent.name); // Optional: Log the updated student data
        setUpdatedStudent({ name: "", age: "", gender: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="container">
      <h3>Update Student</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            value={updatedStudent.name}
            onChange={(e) => {
              setUpdatedStudent({ ...updatedStudent, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Student Age
          </label>
          <input
            type="text"
            className="form-control"
            value={updatedStudent.age}
            onChange={(e) => {
              setUpdatedStudent({ ...updatedStudent, age: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            value={updatedStudent.gender}
            onChange={(e) => {
              setUpdatedStudent({ ...updatedStudent, gender: e.target.value });
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={updateStudent}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;
