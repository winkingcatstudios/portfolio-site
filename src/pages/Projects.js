import ProjectList from "../components/page-components/ProjectList";
import classes from "./Projects.module.css";

const PROJECT_DATA = [
  {
    id: "p1",
    title: "Project 1",
    type: "Python",
    image: "/python_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios",
    shortDescription: "Example project in Python",
    longDescription:
      "Example project in Python. This is the long description that appears below the expand window. ",
  },
  {
    id: "p2",
    title: "Project 2",
    type: "Matlab",
    image: "/matlab_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios",
    shortDescription: "Example project in MatLab",
    longDescription: "Example project in Python",
  },
  {
    id: "p3",
    title: "Portfolio Site",
    type: "JavaScript",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/portfolio-site",
    shortDescription: "The site you are currently viewing",
    longDescription: "This site was created using React, Material-UI, EmailJS",
  },
];

function ProjectsPage() {
  return (
    <section className={classes.main}>
      <h1>Projects</h1>
      <ProjectList projects={PROJECT_DATA} />
    </section>
  );
}

export default ProjectsPage;

// old return
// <ProjectList projects={PROJECT_DATA} />
