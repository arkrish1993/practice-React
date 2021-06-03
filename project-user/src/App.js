import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addUsersHandler = (user) => {
    setUsers((prevState) => [user, ...prevState]);
  };
  return (
    <>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
