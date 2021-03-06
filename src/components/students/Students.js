import React from "react";
import Avatar from "../layout/Avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading";
import { toast } from "react-toastify";

const Students = () => {
  useFirestoreConnect([{ collection: "dmak", orderBy: ["createdAt", "desc"] }]);

  const firestore = useFirestore();
  const students = useSelector((state) => state.firestore.ordered.dmak);

  if (!students) {
    return <Loading />;
  }

  const deleteStudent = async (id) => {
    try {
      await firestore.collection("dmak").doc(id).delete();
      toast.success("Delete Successfully!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("Somthing went wrong!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {students.map((student, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
              <div className="card shadow text-center py-4">
                <Avatar url={`https://i.pravatar.cc/150?img=${index}`} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{student.name}</h5>
                  <p className="text-muted small">{student.email}</p>
                  <Link
                    to={`/student/${student.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <Link
                    to={`/studentForm/${student.id}`}
                    className="p-2 btn-edit text-warning"
                  >
                    <span className="material-icons">edit_outline</span>
                  </Link>
                  <button
                    className="btn btn-delete text-danger"
                    onClick={() => deleteStudent(student.id)}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
