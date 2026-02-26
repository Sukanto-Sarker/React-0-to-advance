import { useState } from "react";

export default function StudentAttendenceApp() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function addStudentHandeler() {
    if (studentName.trim() === "") {
      alert("Please enter a valid student name");
      return;
    }

    setStudents([
      ...students,
      { name: studentName, status: "absent" }
    ]);
    setStudentName("");
  }

  function markStatus(index, status) {
    const updatedStudents = [...students];
    updatedStudents[index].status = status;
    setStudents(updatedStudents);
  }

  function deleteHandler(index) {
    setStudents(students.filter((_, i) => i !== index));
  }

  const presentStudents = students.filter(s => s.status === "present");
  const absentStudents = students.filter(s => s.status === "absent");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8">
        
        <h1 className="text-4xl font-extrabold text-center text-amber-800 mb-6">
          Student Attendance App
        </h1>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
          <input
            type="text"
            placeholder="Write student name here"
            className="w-full sm:w-80 px-4 py-2 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <button
            onClick={addStudentHandeler}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Add Student
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* All Students */}
          <div className="bg-amber-50 rounded-xl shadow-md p-6 border-t-4 border-amber-500">
            <h2 className="text-xl font-bold text-center text-amber-700 mb-3">
              All Students ({students.length})
            </h2>

            <ul>
              {students.map((student, index) => (
                <li key={index} className="flex justify-between items-center border-b py-2">
                  <span className="font-semibold">{student.name}</span>

                  <div className="flex gap-1">
                    <button
                      onClick={() => markStatus(index, "present")}
                      className="px-2 py-1 text-sm bg-green-600 text-white rounded"
                    >
                      Present
                    </button>
                    <button
                      onClick={() => markStatus(index, "absent")}
                      className="px-2 py-1 text-sm bg-red-600 text-white rounded"
                    >
                      Absent
                    </button>
                    <button
                      onClick={() => deleteHandler(index)}
                      className="px-2 py-1 text-sm bg-gray-700 text-white rounded"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Present */}
          <div className="bg-green-50 rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <h2 className="text-xl font-bold text-center text-green-700 mb-3">
              Present ({presentStudents.length})
            </h2>
            <ul>
              {presentStudents.map((s, i) => (
                <li key={i} className="border-b py-1 font-semibold text-center">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Absent */}
          <div className="bg-red-50 rounded-xl shadow-md p-6 border-t-4 border-red-500">
            <h2 className="text-xl font-bold text-center text-red-700 mb-3">
              Absent ({absentStudents.length})
            </h2>
            <ul>
              {absentStudents.map((s, i) => (
                <li key={i} className="border-b py-1 font-semibold text-center">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
