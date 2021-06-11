import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/auth";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPWRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submiHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAnaLK-P7elPjCJMTP7iqWgjYV7RU8doMg",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPWRef.current.value,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (!res.ok) {
          throw Error("Something went wrong");
        }
        history.replace("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={submiHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength="7" ref={newPWRef} />
      </div>
      <div className={classes.action}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <button>Change Password</button>}
      </div>
    </form>
  );
};

export default ProfileForm;
