import React from "react";

export default function Button({ randomUser, addUser }) {
  return (
    <div className="buttons">
      <button onClick={() => randomUser()} className="table-btn">
        New User
      </button>
      <button onClick={() => addUser()} className="table-btn">
        Add User
      </button>
    </div>
  );
}
