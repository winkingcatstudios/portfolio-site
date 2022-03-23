import { useHistory } from 'react-router-dom'

import ContactForm from "../components/page-components/ContactForm";

function ContactPage() {
  const history = useHistory();

  function sendMessageHandler(contactData) {
    fetch(
      "https://portfolio-site-winkingcat-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        }
      }
    ).then(() => {
        history.replace('/');
    })
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <ContactForm onSentMessage={sendMessageHandler} />
    </section>
  );
}

export default ContactPage;
