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
  const [showAll, setShowAll] = React.useState(true);
  const [showPython, setShowPython] = React.useState(false);
  const [showWebdev, setShowWebdev] = React.useState(false);
  const [showCsharp, setShowCsharp] = React.useState(false);
  const [showCpp, setShowCpp] = React.useState(false);
  const [showOther, setShowOther] = React.useState(false);

  let contentAll;
  let contentPython;
  let contentWebdev;
  let contentCsharp;
  let contentCpp;
  let contentOther;
  let projectsPython = [];
  let projectsWebdev = [];
  let projectsCsharp = [];
  let projectsCpp = [];
  let projectsOther = [];

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
    } else {
      projectsOther.push(project);
    }
  });

  if (showAll) {
    contentAll = props.projects.map((project) => (
      <Grid item xs={12} sm={6} md={4}>
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

  if (showPython) {
    contentPython = projectsPython.map((project) => (
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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

  if (showOther) {
    contentOther = projectsOther.map((project) => (
      <Grid item xs={12} sm={6} md={4}>
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

  function handleAllButton() {
    setShowAll(true);
    setShowPython(false);
    setShowWebdev(false);
    setShowCsharp(false);
    setShowCpp(false);
    setShowOther(false);
  }

  function handlePythonButton() {
    setShowAll(false);
    setShowPython(true);
    setShowWebdev(false);
    setShowCsharp(false);
    setShowCpp(false);
    setShowOther(false);
  }

  function handleWebdevButton() {
    setShowAll(false);
    setShowPython(false);
    setShowWebdev(true);
    setShowCsharp(false);
    setShowCpp(false);
    setShowOther(false);
  }

  function handleCsharpButton() {
    setShowAll(false);
    setShowPython(false);
    setShowWebdev(false);
    setShowCsharp(true);
    setShowCpp(false);
    setShowOther(false);
  }

  function handleCppButton() {
    setShowAll(false);
    setShowPython(false);
    setShowWebdev(false);
    setShowCsharp(false);
    setShowCpp(true);
    setShowOther(false);
  }

  function handleOtherButton() {
    setShowAll(false);
    setShowPython(false);
    setShowWebdev(false);
    setShowCsharp(false);
    setShowCpp(false);
    setShowOther(true);
  }



  return (
    <Container>
      <Grid container pb={3} justifyContent="center" spacing={2}>
        {showAll === true ? (
          <Grid item>
            <ColorButtonOn
              variant="contained"
              onClick={() => 
                handleAllButton()
              }
            >
              All
            </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
              variant="contained"
              onClick={() => 
                handleAllButton()
              }
            >
              All
            </ColorButtonOff>
          </Grid>
        )}
        {showPython === true ? (
          <Grid item>
            <ColorButtonOn
              variant="contained"
              onClick={() => handlePythonButton()}
            >
              Python
            </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
              variant="contained"
              onClick={() => handlePythonButton()}
            >
              Python
            </ColorButtonOff>
          </Grid>
        )}
        {showWebdev === true ? (
          <Grid item>
            <ColorButtonOn
              variant="contained"
              onClick={() => handleWebdevButton()}
            >
              Webdev
            </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
              variant="contained"
              onClick={() => handleWebdevButton()}
            >
              Webdev
            </ColorButtonOff>
          </Grid>
        )}
        {showCsharp === true ? (
          <Grid item>
            <ColorButtonOn
              variant="contained"
              onClick={() => handleCsharpButton()}
            >
              C#
            </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
              variant="contained"
              onClick={() => handleCsharpButton()}
            >
              C#
            </ColorButtonOff>
          </Grid>
        )}
        {showCpp === true ? (
          <Grid item>
            <ColorButtonOn
              variant="contained"
              onClick={() => handleCppButton()}
            >
              C++
            </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
              variant="contained"
              onClick={() => handleCppButton()}
            >
              C++
            </ColorButtonOff>
          </Grid>
        )}
        {showOther === true ? (
          <Grid item>
            <ColorButtonOn
              variant="contained"
              onClick={() => handleOtherButton()}
            >
              Other
            </ColorButtonOn>
          </Grid>
        ) : (
          <Grid item>
            <ColorButtonOff
              variant="contained"
              onClick={() => handleOtherButton()
              }
            >
              Other
            </ColorButtonOff>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {contentAll}
        {contentPython}
        {contentWebdev}
        {contentCsharp}
        {contentCpp}
        {contentOther}
      </Grid>
    </Container>
  );
}

export default ProjectList;
