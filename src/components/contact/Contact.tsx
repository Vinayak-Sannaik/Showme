import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Importing EmailJS

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Specify the type for the form reference

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use non-null assertion operator
    emailjs
      .sendForm('service_2pjr3wj', 'template_15fvwdk', form.current!, {  // Here is the change
        publicKey: 'Q_WxzIvDYDrro7SlY', // Use the appropriate key
      })
      .then(
        () => {
          console.log('Message sent successfully!');
          // Resetting form fields after sending the email
          form.current!.reset(); // Here is the change
        },
        (error) => {
          console.error('Failed to send message:', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
