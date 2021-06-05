import { Component } from "react";
import classes from "./User.module.css";

//CLASS COMPONENT
class User extends Component {
  componentWillUnmount() {
    console.log("UnMounted!");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//FUNCTIONAL COMPONENT
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
