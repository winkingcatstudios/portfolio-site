import classes from "./About.module.css";
import { Link } from "react-router-dom";
import { Typography, Container, Grid } from "@mui/material/";

function AboutPage() {
  return (
    <Container>
      <section className={classes.main}>
        <h1 className={classes.pageTitle}>About Me</h1>
      </section>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} style={{ display: "flex" }}>
          <Typography variant="h6" gutterBottom component="div">
            <div className={classes.text}>
              Hi! I'm Dan Kercher, a software developer located in Indianapolis,
              Indiana. I started Winking Cat Studio as a way to organize my
              personal, academic, and professional projects. Feel free to check
              some of them out on my{" "}
              <Link to="/projects">
                <span className={classes.text} style={{ fontWeight: "bold" }}>
                  projects page.{" "}
                </span>
              </Link>
              <br />
              <br />I have a strong background in Object-Oriented Programming
              and software design principles, and enjoy programming in a
              variety of languages including Python, C++, C#, TypeScript,
              JavaScript, and more. Feel free to browse other areas of interest
              on my{" "}
              <Link to="/skills">
                <span className={classes.text} style={{ fontWeight: "bold" }}>
                  skills page.{" "}
                </span>
              </Link>
              <br />
              <br />My coding skills are supplimented with over 5 years of experience in IT support. 
              In addition to a degree in Computer Science, I also have a degree in History. During my 
              free time, I enjoy tabletop gaming with friends and spending time with my partner and our pets.
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} style={{ display: "flex" }}>
          <img
            src={"/winkingcatlogo-transparent-white.png"}
            alt={"winkingcat logo"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutPage;
