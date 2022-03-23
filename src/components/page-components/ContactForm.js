import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./ContactForm.module.css";

function ContactForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject= subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const contactData = {
        name: enteredName,
        email: enteredEmail,
        subject: enteredSubject,
        message: enteredMessage
    };

    props.onSendMessage(contactData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="Name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Email">Email Address</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Subject</label>
          <input type="text" required id="subject" ref={subjectInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Message</label>
          <textarea id="message" required rows="5" ref={messageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;
