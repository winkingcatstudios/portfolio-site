import ContactForm from "../components/page-components/ContactForm";

function ContactPage() {
  return (
    <section>
      <h1 style={{ height: 30}}>Contact Me</h1>
      <h3>
        If you want to ask a question, talk to me about a project
        collaboration, or just say hi, fill out the form below or send an
        email to winkingcatstudio@gmail.com and let's talk!
      </h3>
      <ContactForm />
    </section>
  );
}

export default ContactPage;
