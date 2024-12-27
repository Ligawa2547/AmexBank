import React from 'react';

const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <p>We're here to help you with any questions or concerns you have about your education at WGU.</p>
      </header>

      <section>
        <h2>Get in Touch</h2>
        <form>
          <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

