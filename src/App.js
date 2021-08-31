import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import AddUser from "./components/AddUser";
import Loading from "./components/Loading";
import cw from "./assets/cw.svg";
import axios from "axios";
const url = "https://randomuser.me/api/";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [addUsers, setAddUsers] = useState([]);
  useEffect(() => {
    randomUser();
  }, []);

  const randomUser = async () => {
    setLoading(true);
    try {
      const response = await axios(url);
      const users = await response.data.results;
      setLoading(false);
      setUsers(users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // add user
  const addUser = () => {
    const addNewUser = users;
    setAddUsers((prevUsers) => [...prevUsers, ...addNewUser]);
  };
  // delete user
  const onDeleteUser = (deleteId) => {
    setAddUsers(addUsers.filter((newUser) => newUser.login.uuid !== deleteId));
  };
  if (loading) {
    return (
      <div classname="App">
        <Loading />
      </div>
    );
  }
  return (
    <div classname="App">
      <div className="header-img">
        <img classname="cw-img" src={cw}></img>
      </div>
      <div className="card-container">
        {users.map((user, index) => (
          <Card user={user} key={index} />
        ))}
        <Button randomUser={randomUser} addUser={addUser} />
        {addUsers.length > 0 ? (
          <AddUser addUsers={addUsers} onDeleteUser={onDeleteUser} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
