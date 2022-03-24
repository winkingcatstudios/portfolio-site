import { Link } from "react-router-dom";
import ButtonMailto from "../page-components/ButtonMailto";

import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <div>
      <footer className={classes.footer}>
        <h3 style={{ height: 10 }}>Let's talk </h3>
        Want to get in touch or talk about a project? <br />
        Feel free to contact me via email at{" "}
        <span style={{ fontWeight: "bold" }}>
          <ButtonMailto
            label="winkingcatstudio@gmail.com"
            mailto="mailto:winkingcatstudio@gmail.com"
          />
        </span>
        <br />
        or drop a line in the form at the{" "}
        <Link to="/contact">
          <span style={{ fontWeight: "bold" }}>contact page </span>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
