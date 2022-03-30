import classes from "./Skills.module.css";
import { Container, Grid } from "@mui/material/";
import SkillsGrid from "../components/page-components/SkillsGrid";

function SkillsPage() {
  return (
    <Container>
      <section className={classes.main}>
        <h1 className={classes.pageTitle}>Skills {"&"} Experience</h1>
      </section>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <SkillsGrid ver="oop" title="Object-Oriented Programming"/>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <SkillsGrid ver="soft" title="Technical Soft Skills"/>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <SkillsGrid ver="web" title="Web Development"/>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <SkillsGrid ver="utils" title="Utilities"/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SkillsPage;
