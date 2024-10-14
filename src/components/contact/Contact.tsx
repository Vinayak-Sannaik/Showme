import './contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Importing EmailJS

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Reference for the form
  const [message, setMessage] = useState<string>(''); // State for success/error messages

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) { // Check if form.current is not null
      emailjs
        .sendForm('service_2pjr3wj', 'template_15fvwdk', form.current, {
          publicKey: 'Q_WxzIvDYDrro7SlY', // Use the appropriate key
        })
        .then(
          () => {
            setMessage('Message sent successfully!'); // Set success message
            form.current!.reset(); // Reset form fields after sending the email
          },
          (error) => {
            setMessage('Failed to send message: ' + error.text); // Set error message
          }
        );
    } else {
      setMessage('Form reference is null'); // Handle the case when form.current is null
    }
  };

  return (
    <div id="connect" className="contact-container">
      <h1>Let's Connect</h1>
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
      {message && ( // Conditionally render the message
        <div className="message">
          {message}
        </div>
      )}
    </div>
  );
};

export default Contact;
