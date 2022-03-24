import classes from "./AboutMe.module.css";

function AboutMePage() {
  return (
    <section>
      <h1>About Dan Kercher</h1>
      <img className={classes.image}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
        }
        alt={"python"}
      />
    </section>
  );
}

export default AboutMePage;
