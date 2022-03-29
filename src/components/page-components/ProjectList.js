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

  let content;

  if (showPython) {
    content = (
      <Grid container spacing={3} justifyContent="center">
        {props.projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} style={{ display: "flex" }}>
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
    );
  } else {
    content = <Grid container spacing={3} justifyContent="center" />;
  }

  return (
    <Container>
      <Stack m={2} pb={3} justifyContent="center" spacing={2} direction="row">
        {showPython === true ? (
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowPython(!showPython);
            }}
          >
            Python
          </ColorButtonOn>
        ) : (
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowPython(!showPython);
            }}
          >
            Python
          </ColorButtonOff>
        )}
        {showWebdev === true ? (
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowWebdev(!showWebdev);
            }}
          >
            Webdev
          </ColorButtonOn>
        ) : (
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowWebdev(!showWebdev);
            }}
          >
            Webdev
          </ColorButtonOff>
        )}
        {showCsharp === true ? (
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowCsharp(!showCsharp);
            }}
          >
            C#
          </ColorButtonOn>
        ) : (
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowCsharp(!showCsharp);
            }}
          >
            C#
          </ColorButtonOff>
        )}
        {showCpp === true ? (
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowCpp(!showCpp);
            }}
          >
            C++
          </ColorButtonOn>
        ) : (
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowCpp(!showCpp);
            }}
          >
            C++
          </ColorButtonOff>
        )}
        {showMatlab === true ? (
          <ColorButtonOn
            variant="contained"
            onClick={() => {
              setShowMatlab(!showMatlab);
            }}
          >
            MATLAB
          </ColorButtonOn>
        ) : (
          <ColorButtonOff
            variant="contained"
            onClick={() => {
              setShowMatlab(!showMatlab);
            }}
          >
            MATLAB
          </ColorButtonOff>
        )}
      </Stack>
      {content}
    </Container>
  );
}

export default ProjectList;
