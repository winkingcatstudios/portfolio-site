import { Route, Switch } from "react-router-dom";
import AboutMePage from "./pages/AboutMe";
import AboutThisSitePage from "./pages/AboutThisSite";
import ProjectsPage from "./pages/Projects";
import FavoritesPage from "./pages/Favorites";
import ContactPage from "./pages/Contact";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AboutMePage />
        </Route>
        <Route path="/about-this-site">
          <AboutThisSitePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
