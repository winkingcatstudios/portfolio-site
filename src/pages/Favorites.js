import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorite-context";
import ProjectList from "../components/page-components/ProjectList";
import classes from "./Favorites.module.css";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <>
        <div className={classes.text}>
          You don't have any favorite projects yet, start adding some!
          <br />
          Head to the{" "}
        <Link to="/projects">
          <span style={{ fontWeight: "bold" }}>projects page </span>
        </Link>{" "}
        and click the heart icon on the <br /> cards of projects you want to save to favorites.
        </div>
      </>
    );
  } else {
    content = <ProjectList projects={favoritesCtx.favorites} />;
  }

  return (
    <section >
      <h1 className={classes.pageTitle}>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
