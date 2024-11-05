import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    truckType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w0rgx8i",
        "template_ti2d9st",
        formData,
        "7Q-iOYnOMcFiDuaax"
      )
      .then((response) => {
        alert("Form submitted successfully");
        setFormData({ name: "", phone: "", email: "", truckType: "" });
      })
      .catch((error) => {
        alert("Error submitting form");
      });
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>FleetFlow - Empowering Owner-Operators with New Opportunities</h1>
        <p>
          Connecting you with reliable, high-paying jobs to maximize your
          earnings.
        </p>
        <button onClick={() => (window.location.href = "/signup")}>
          Join Our Network
        </button>
      </section>

      <section className="benefits">
        <h2>Why Choose FleetFlow?</h2>
        <div className="benefit-container">
          <div className="benefit-box">
            <strong>Reliable Work:</strong>
            <p>We connect you with steady, trustworthy job opportunities.</p>
          </div>
          <div className="benefit-box">
            <strong>Earn More:</strong>
            <p>
              Contracts that maximize your earnings for every mile you drive.
            </p>
          </div>
          <div className="benefit-box">
            <strong>Dedicated Support:</strong>
            <p>Our team is here to support you every step of the way.</p>
          </div>
        </div>
        <button onClick={() => (window.location.href = "/signup")}>
          Get Started
        </button>
      </section>

      <section className="about">
        <h1>About FleetFlow</h1>
        <p>
          FleetFlow is dedicated to supporting owner-operator drivers by
          connecting them with profitable opportunities. Our mission is to
          streamline the connection process so you can focus on driving while we
          handle the rest.
        </p>
        <p>
          We prioritize flexibility, reliability, and fairness in all our
          partnerships, ensuring that every mile counts.
        </p>
      </section>

      <section className="signup">
        <h1>Start With Us</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Type of Truck(s):</label>
          <input
            type="text"
            name="truckType"
            value={formData.truckType}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
