import classes from "./About.module.css";

function AboutPage() {
  return (
    <section className={classes.main}>
      <h1 className={classes.pageTitle}>About Me</h1>
      <div className={classes.container}>
        <div className={classes.text}>
          Hi, I'm Dan Kercher
        </div>
        <div className={classes.image}>
          <img
            src={"/winkingcatlogo-transparent-white.png"}
            alt={"winkingcat logo"}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
