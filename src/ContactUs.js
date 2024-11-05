import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w0rgx8i",
        "template_rlakqfa",
        contactData,
        "7Q-iOYnOMcFiDuaax"
      )
      .then((response) => {
        alert("Message sent successfully");
        setContactData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Error sending message");
      });
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={contactData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={contactData.phone}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={contactData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
