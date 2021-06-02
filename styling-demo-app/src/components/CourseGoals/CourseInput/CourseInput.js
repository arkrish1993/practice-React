import React, { useState } from "react";

import Button from "../../UI/Button/Button";

// USING CSS MODULES
import classes from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${
          !isValid ? classes.invalid : ""
        }`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

// USING STYLED COMPONENTS
// import styled from "styled-components";

// const FormControl = styled.div`
// margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//   background-color: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;
// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     setIsValid(true);
//     setEnteredValue("");
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <FormControl invalid={!isValid}>
//         <label>Course Goal</label>
//         <input
//           type="text"
//           value={enteredValue}
//           onChange={goalInputChangeHandler}
//         />
//       </FormControl>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// NORMAL CASE
// import "./CourseInput.css";

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     setIsValid(true);
//     setEnteredValue("");
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={`form-control ${!isValid ? 'invalid': ''}`}>
//         <label>Course Goal</label>
//         <input
//           type="text"
//           value={enteredValue}
//           onChange={goalInputChangeHandler}
//         />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

export default CourseInput;