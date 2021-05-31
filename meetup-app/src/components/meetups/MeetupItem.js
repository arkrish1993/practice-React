import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to Favourites</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
