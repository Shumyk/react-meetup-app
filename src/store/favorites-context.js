import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
	addFavorite: favMeetup => {},
	removeFavorite: id => {},
	itemIsFavorite: id => {},
});

export function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([]);

	function addFavoriteHandler(meetup) {
		setUserFavorites(prevFavs => prevFavs.concat(meetup));
	}
	function removeFavoriteHandler(meetupId) {
		setUserFavorites(prevUserFavs => prevUserFavs.filter(meetup => meetup.id !== meetupId));
	}
	function itemIsFavoriteHandler(meetupId) {
		return userFavorites.some(meetup => meetup.id === meetupId);
	}
	
  const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;