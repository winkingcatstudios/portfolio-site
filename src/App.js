import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/About";
// import SkillsPage from "./pages/Skills";
// import ProjectsPage from "./pages/Projects";
// import FavoritesPage from "./pages/Favorites";
// import ContactPage from "./pages/Contact";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const SkillsPage = React.lazy(() => import("./pages/Skills"));
const ProjectsPage = React.lazy(() => import("./pages/Projects"));
const FavoritesPage = React.lazy(() => import("./pages/Favorites"));
const ContactPage = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <AboutPage />
            <Footer />
          </Route>
          <Route path="/skills">
            <SkillsPage />
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
      </Suspense>
    </Layout>
  );
}

export default App;
