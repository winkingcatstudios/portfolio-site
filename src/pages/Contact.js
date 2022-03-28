import ContactForm from "../components/page-components/ContactForm";
import classes from "./Contact.module.css";
import ButtonMailto from "../components/page-components/ButtonMailto";

function ContactPage() {
  return (
    <section className={classes.main}>
      <h1 style={{ height: 30 }} className={classes.pageTitle}>Contact Me</h1>
      <div className={classes.text}>
        If you want to ask a question, talk to me about a project collaboration,
        or just say hi, fill out the form below or send an email to{" "}
        <span style={{ fontWeight: "bold" }}>
          <ButtonMailto
            label="winkingcatstudio@gmail.com"
            mailto="mailto:winkingcatstudio@gmail.com"
          />
        </span>{" "}
        and let's talk! <br />
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactPage;
