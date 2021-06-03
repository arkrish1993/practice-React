import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourites-context";

import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favourites">
            My Favourites
            {favCtx.totalFavourites > 0 && (
              <span className={classes.badge}>{favCtx.totalFavourites}</span>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
