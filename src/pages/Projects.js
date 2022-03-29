import ProjectList from "../components/page-components/ProjectList";
import classes from "./Projects.module.css";

// Allowed types: Python, Webdev, C#, C++, MATLAB

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
    type: "MATLAB",
    image: "/matlab_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios",
    shortDescription: "Example project in MatLab",
    longDescription: "Example project in Python",
  },
  {
    id: "p3",
    title: "Portfolio Site",
    type: "Webdev",
    image: "/js_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/portfolio-site",
    shortDescription: "The site you are currently viewing",
    longDescription: "This site was created using React, Material-UI, EmailJS",
  },
  {
    id: "p4",
    title: "C# script",
    type: "C#",
    image: "/csharp_stock.png",
    gitLink: "https://github.com/winkingcatstudios/portfolio-site",
    shortDescription: "The site you are currently viewing",
    longDescription: "This site was created using React, Material-UI, EmailJS",
  },
  {
    id: "p5",
    title: "C++ algorithm",
    type: "C++",
    image: "/c++_stock.jpeg",
    gitLink: "https://github.com/winkingcatstudios/portfolio-site",
    shortDescription: "The site you are currently viewing",
    longDescription: "This site was created using React, Material-UI, EmailJS",
  },
];

function ProjectsPage() {
  return (
    <section className={classes.main}>
      <h1 className={classes.pageTitle}>Projects</h1>
      <ProjectList projects={PROJECT_DATA} />
    </section>
  );
}

export default ProjectsPage;
