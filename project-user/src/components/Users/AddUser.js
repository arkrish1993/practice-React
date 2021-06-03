import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  //   const usernameRef = useRef();
  //   const ageRef = useRef();
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const usernameChangeHandler = (username) => {
    setUserName(username.target.value);
  };
  const ageChangeHandler = (age) => {
    setAge(age.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();

    // const userName = usernameRef.current.value;
    // const age = ageRef.current.value;

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (Non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (Greater than 1).",
      });
      return;
    }
    setError(null);
    props.onAddUser({
      id: Math.random(),
      userName: userName,
      age: +age,
    });

    // usernameRef.current.value = "";
    // ageRef.current.value = "";

    setUserName("");
    setAge("");
  };

  return (
    <Wrapper>
      {error != null && (
        <ErrorModal error={error} onCloseModal={() => setError(null)} />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                //   ref={usernameRef}
                onChange={usernameChangeHandler}
                value={userName}
              />
            </div>
            <div>
              <label htmlFor="age">Age (Years)</label>
              <input
                type="number"
                id="age"
                //   ref={ageRef}
                onChange={ageChangeHandler}
                value={age}
              />
            </div>
          </div>
          <div>
            <Button type="submit">Add user</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
