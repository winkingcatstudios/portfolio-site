import ProjectList from "../components/page-components/ProjectList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Project 1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    gitLink: "github/project1",
    description:
      "Example project in Python",
  },
  {
    id: "m2",
    title: "Project 2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    gitLink: "github/project1",
    description:
      "Example project in MatLab",
  },
];

function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <ProjectList projects={DUMMY_DATA} />
    </section>
  );
}

export default ProjectsPage;
