import { useContext } from "react";

import FavoritesContext from "../store/favorite-context";
import ProjectList from "../components/page-components/ProjectList";
import classes from "./Favorites.module.css";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <h2>You don't have any favorite projects yet, start adding some!</h2>
    );
  } else {
    content = <ProjectList projects={favoritesCtx.favorites} />;
  }

  return (
    <section className={classes.main}>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;