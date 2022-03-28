import ProjectCard from "./ProjectCard";
import classes from "./ProjectList.module.css";
import { Container, Grid } from "@mui/material/";

function ProjectList(props) {
  return (
    <Container>
      <Grid container spacing={3}>
        {props.projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} style={{ display: 'flex'}}>
              <ProjectCard
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                type={project.type}
                gitLink={project.gitLink}
                shortDescription={project.shortDescription}
                longDescription={project.longDescription}
              />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectList;

// old return
//  <ul className={classes.list}>
//       {props.projects.map((project) => (
//         <ProjectItem
//           key={project.id}
//           id={project.id}
//           image={project.image}
//           title={project.title}
//           gitLink={project.gitLink}
//           description={project.description}
//         />
//       ))}
//     </ul>

// generic grid example
//<Grid container>
//<Grid item xs={12} sm={6} md={4}>
//  <Paper>1</Paper>
//</Grid>
//<Grid item xs={12} sm={6} md={4}>
//  <Paper>2</Paper>
//</Grid>
//<Grid item xs={12} sm={6} md={4}>//
//  <Paper>3</Paper>
//</Grid>
//<Grid item xs={12} sm={6} md={4}>//
//  <Paper>4</Paper>
//</Grid>
//</Grid>
