
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [course, setCourse] = useState("");

    const [students, setStudents] = useState(
        JSON.parse(localStorage.getItem("students")) || []
    );

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    function addStudent() {

        if (name === "" || rollno === "" || course === "") {
            alert("Please fill all fields");
            return;
        }

        const newStudent = {
            name: name,
            rollno: rollno,
            course: course
        };

        setStudents([...students, newStudent]);

        setName("");
        setRollno("");
        setCourse("");
    }

    function deleteStudent(index) {
        const updatedStudents = students.filter(
            (student, i) => i !== index
        );

        setStudents(updatedStudents);
    }

    return (
        <div className="container">

            <h1>Student Management System</h1>

            <input
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <button onClick={addStudent}>
                Add Student
            </button>

            <h2>Student Details</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.rollno}</td>
                            <td>{student.course}</td>
                            <td>
                                <button onClick={() => deleteStudent(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default App;
