import React from "react";
import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.length === 0 && (
        <p className={styles["no-users"]}>No users added.</p>
      )}
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.userName} ({user.age} years old)
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UsersList;
