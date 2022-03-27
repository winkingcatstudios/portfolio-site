import { Route, Switch } from "react-router-dom";
import AboutMePage from "./pages/AboutMe";
import AboutThisSitePage from "./pages/AboutThisSite";
import ProjectsPage from "./pages/Projects";
import FavoritesPage from "./pages/Favorites";
import ContactPage from "./pages/Contact";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import FavoritesContext from "./store/favorite-context";
import { useContext } from "react";

function App() {
  const favoritesCtx = useContext(FavoritesContext);
  favoritesCtx.favorites = JSON.parse(localStorage.getItem("faves"));
  favoritesCtx.totalFavorites = favoritesCtx.favorites.length;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AboutMePage />
          <Footer />
        </Route>
        <Route path="/about-this-site">
          <AboutThisSitePage />
          <Footer />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
          <Footer />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
          <Footer />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
