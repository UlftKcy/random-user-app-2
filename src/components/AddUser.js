import React from "react";
import { FaUserTimes } from "react-icons/fa";

export default function AddUser({ addUsers, onDeleteUser }) {
  return (
    <div className="table p-2">
      <div className="container">
        <div className="row row-cols-5 fw-bold">
          <div className="col-2 border bg-warning">Firstname</div>
          <div className="col-5 border bg-warning">Email</div>
          <div className="col-3 border bg-warning">Phone</div>
          <div className="col-1 border bg-warning">Age</div>
          <div className="col-1 border bg-warning">Rem</div>
        </div>

        {addUsers.map((newUser) => (
          <div className="row row-cols-5 text-success">
            <div className="col-2">{newUser.name.first}</div>
            <div className="col-5">{newUser.email}</div>
            <div className="col-3">{newUser.phone}</div>
            <div className="col-1">{newUser.dob.age}</div>
            <div className="col-1">
              <button
                onClick={() => onDeleteUser(newUser.login.uuid)}
                type="button"
                className="btn btn-danger py-0 px-1"
              >
                <FaUserTimes />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
