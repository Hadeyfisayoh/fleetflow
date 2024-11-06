import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    truckType: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="content-section2">
      <div className="home">
        <nav className="navbar">
          <img
            src="/images/log.png"
            alt="FleetFlow Logo"
            className="logo"
            onClick={() => (window.location.href = "/")}
          />
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Start With Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <section className="hero">
          <img
            src="/images/hero-truck.jpg"
            alt="Hero Truck"
            className="hero-truck"
          />
          <h1>FleetFlow - Empowering Owner-Operators with New Opportunities</h1>
          <p>
            Discover how we connect you with reliable, high-paying jobs to
            maximize your earnings.
          </p>
          <button onClick={() => (window.location.href = "/signup")}>
            Join Our Network
          </button>
        </section>

        <section className="benefits">
          <h2>Why Choose FleetFlow?</h2>
          <div className="benefit-container">
            <div className="benefit-box">
              <img
                src="/images/relaible.jpg"
                alt="Reliable Work"
                className="reliable-image"
              />
              <strong>Reliable Work</strong>
              <p>We connect you with steady, trustworthy job opportunities.</p>
            </div>
            <div className="benefit-box">
              <img
                src="/images/earn-more.jpg"
                alt="Earn More"
                className="earn-more-image"
              />
              <strong>Earn More</strong>
              <p>
                Contracts that maximize your earnings for every mile you drive.
              </p>
            </div>
            <div className="benefit-box">
              <img src="/images/support.jpg" alt="Dedicated Support" />
              <strong>Dedicated Support</strong>
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
            streamline the connection process so you can focus on driving while
            we handle the rest.
          </p>
          <p>
            We prioritize flexibility, reliability, and fairness in all our
            partnerships, ensuring that every mile counts.
          </p>
        </section>

        <section className="signup">
          <div className="signup-content">
            <div className="signup-form">
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
            </div>

            <div className="truck-images">
              <img
                src="/images/box-truck.jpg"
                alt="Box Truck"
                className="truck-image"
              />
              <img
                src="/images/straight-truck.jpg"
                alt="Straight Truck"
                className="truck-image"
              />
              <img
                src="/images/spinter-van.jpg"
                alt="Sprinter Van"
                className="truck-image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
