import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  const favCtx = useContext(FavouritesContext);
  return (
    <section>
      <h1>My Favourites</h1>
      {favCtx.totalFavourites === 0 ? (
        <p>No Favourites Added...Try adding some?</p>
      ) : (
        <MeetupList meetups={favCtx.favourites} />
      )}
    </section>
  );
}

export default FavouritesPage;
