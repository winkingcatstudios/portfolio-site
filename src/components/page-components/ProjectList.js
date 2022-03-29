import ProjectCard from "./ProjectCard";
import classes from "./ProjectList.module.css";
import * as React from "react";
import { Stack, Button, Container, Grid } from "@mui/material/";
import { styled } from "@mui/material/styles";

const ColorButtonOn = styled(Button)(({ theme }) => ({
  color: "#321b6c",
  backgroundColor: "#71e1e1",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#51c1c1",
  },
}));

const ColorButtonOff = styled(Button)(({ theme }) => ({
  color: "#71e1e1",
  backgroundColor: "#321b6c",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#5d20d3",
  },
}));

function ProjectList(props) {
  const [showPython, setShowPython] = React.useState(true);
  const [showWebdev, setShowWebdev] = React.useState(true);
  const [showCsharp, setShowCsharp] = React.useState(true);
  const [showCpp, setShowCpp] = React.useState(true);
  const [showMatlab, setShowMatlab] = React.useState(true);

  let contentPython;
  let contentWebdev;
  let contentCsharp;
  let contentCpp;
  let contentMatlab;
  let projectsPython = [];
  let projectsWebdev = [];
  let projectsCsharp = [];
  let projectsCpp = [];
  let projectsMatlab = [];

  // Allowed types: Python, Webdev, C#, C++, MATLAB

  props.projects.map((project) => {
    if (project.type === "Python") {
      projectsPython.push(project);
    } else if (project.type === "Webdev") {
      projectsWebdev.push(project);
    } else if (project.type === "C#") {
      projectsCsharp.push(project);
    } else if (project.type === "C++") {
      projectsCpp.push(project);
    } else if (project.type === "MATLAB") {
      projectsMatlab.push(project);
    } 
  });

  if (showPython) {
    contentPython = projectsPython.map((project) => (
      <Grid item xs={12} sm={6} md={4} >
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
    ));
  }

  if (showWebdev) {
    contentWebdev = projectsWebdev.map((project) => (
      <Grid item xs={12} sm={6} md={4} >
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
    ));
  }

  if (showCsharp) {
    contentCsharp = projectsCsharp.map((project) => (
      <Grid item xs={12} sm={6} md={4} >
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
    ));
  }

  if (showCpp) {
    contentCpp = projectsCpp.map((project) => (
      <Grid item xs={12} sm={6} md={4} >
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
    ));
  }

  if (showMatlab) {
    contentMatlab = projectsMatlab.map((project) => (
      <Grid item xs={12} sm={6} md={4} >
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
    ));
  }

  return (
    <Container>
      <Grid container pb={3} justifyContent="center" spacing={2}>
        {showPython === true ? (
          <Grid item>
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowPython(!showPython);
            }}
          >
            Python
          </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowPython(!showPython);
            }}
          >
            Python
          </ColorButtonOff>
          </Grid>
        )}
        {showWebdev === true ? (
          
          <Grid item>
            <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowWebdev(!showWebdev);
            }}
          >
            Webdev
          </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowWebdev(!showWebdev);
            }}
          >
            Webdev
          </ColorButtonOff>
          </Grid>
        )}
        {showCsharp === true ? (
          <Grid item>
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowCsharp(!showCsharp);
            }}
          >
            C#
          </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowCsharp(!showCsharp);
            }}
          >
            C#
          </ColorButtonOff>
          </Grid>
        )}
        {showCpp === true ? (
          <Grid item>
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowCpp(!showCpp);
            }}
          >
            C++
          </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowCpp(!showCpp);
            }}
          >
            C++
          </ColorButtonOff>
          </Grid>
        )}
        {showMatlab === true ? (
          <Grid item>
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowMatlab(!showMatlab);
            }}
          >
            MATLAB
          </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowMatlab(!showMatlab);
            }}
          >
            MATLAB
          </ColorButtonOff>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {contentPython}
        {contentWebdev}
        {contentCsharp}
        {contentCpp}
        {contentMatlab}
      </Grid>
    </Container>
  );
}

export default ProjectList;
