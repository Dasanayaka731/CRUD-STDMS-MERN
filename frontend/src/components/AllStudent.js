import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          console.log(res.data);
          setStudents(res.data); // Update state with fetched student data
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudent();
  }, []); // Add an empty dependency array to run the effect only once

  const getStudents = () => {
    axios
      .get("http://localhost:8070/student/")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:8070/student/delete/${id}`)
      .then((res) => {
        console.log(res.data); // Optional: Log the deleted student data
        getStudents(); // Refresh the student list after deletion
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h1>All Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Modify</th>
          </tr>
        </thead>
        <tbody>
          {students.map((students) => (
            <tr>
              <td>{students._id}</td>
              <td>{students.name}</td>
              <td>{students.age}</td>
              <td>{students.gender}</td>
              <td>
                <Link to={`/update/${students._id}`}>
                  <i className="fa-solid fa-pen-to-square fs-4"></i>
                </Link>
                <i
                  className="fa-solid fa-trash mx-4 fs-4"
                  onClick={() => deleteStudent(students._id)}
                  style={{ color: "red" }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AllStudent;
