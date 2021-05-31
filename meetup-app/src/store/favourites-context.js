import { createContext, useState } from "react";

//Creates a context with the argument as intial value
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  //state which allows us to manipulate the value of context whenever a new value is set
  const [userFavourites, setUserFavourites] = useState([]);

  //Functions to manipulate the context value
  function addToFavsHandler(meetup) {
    setUserFavourites((prevFavList) => prevFavList.concat(meetup));
  }
  function removeFromFavsHandler(meetupId) {
    setUserFavourites((prevFavList) =>
      prevFavList.filter((meetup) => meetup.id !== meetupId)
    );
  }
  function isFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  // Set pointers to the functions which were created earlier so that they can be used in other components
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addToFavsHandler,
    removeFavourite: removeFromFavsHandler,
    isFavourite: isFavouriteHandler,
  };

  /*
   * Here, the value of context is based on the 'value' prop.
   * Each time this changes, the state is changed accordingly.   *
   */
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
