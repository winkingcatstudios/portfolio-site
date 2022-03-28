import classes from "./AboutMe.module.css";

function AboutMePage() {
  return (
    <section className={classes.main}>
      <h1>About Dan Kercher</h1>
      <img className={classes.image}
        src={
          "/winkingcatlogo-transparent-white.png"
        }
        alt={"winkingcat logo"}
      />
    </section>
  );
}

export default AboutMePage;
