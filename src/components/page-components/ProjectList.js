import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <ul className={classes.list}>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          image={project.image}
          title={project.title}
          gitLink={project.gitLink}
          description={project.description}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
