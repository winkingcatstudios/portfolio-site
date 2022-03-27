import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteProject) => {},
  removeFavorite: (projectID) => {},
  itemIsFavorite: (projectID) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteProject) {
    setUserFavorites((prevUserFavorites) => {
      let faves = prevUserFavorites.concat(favoriteProject);
      // console.log(faves);
      localStorage.setItem("faves", JSON.stringify(faves));
      return faves;
    });
  }

  function removeFavoriteHandler(projectID) {
    setUserFavorites((prevUserFavorites) => {
      let faves = prevUserFavorites.filter(
        (project) => project.id !== projectID
      );
      // console.log(faves);
      localStorage.setItem("faves", JSON.stringify(faves));
      return faves;
    });
  }

  function itemIsFavoriteHandler(projectID) {
    return userFavorites.some((project) => project.id === projectID);
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
