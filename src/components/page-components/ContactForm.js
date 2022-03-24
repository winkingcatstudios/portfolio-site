import { useRef } from "react";
import emailjs from "emailjs-com";

import CardOld from "../ui/CardOld";
import classes from "./ContactForm.module.css";

function ContactForm(props) {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5gva93v",
        "template_fuob5vo",
        form.current,
        "jUP-LFSIdUa-olDGG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <CardOld>
      <form className={classes.form} ref={form} onSubmit={sendEmail}>
        <div className={classes.control}>
          <label>
            Name<span className={classes.r}>*</span>
          </label>
          <input type="text" required name="name" placeholder="Name" />
        </div>
        <div className={classes.control}>
          <label>
            Email Address<span className={classes.r}>*</span>
          </label>
          <input type="email" required name="email" placeholder="Email" />
        </div>
        <div className={classes.control}>
          <label>
            Subject<span className={classes.r}>*</span>
          </label>
          <input type="text" required name="subject" placeholder="Subject" />
        </div>
        <div className={classes.control}>
          <label>
            Message<span className={classes.r}>*</span>
          </label>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your message"
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </CardOld>
  );
}

export default ContactForm;
