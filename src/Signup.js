import React, { useState } from "react";
import emailjs from "emailjs-com";

const Signup = () => {
  const [formData, setFormData] = useState({
    to_name: "FleetFlow Team",
    from_name: "",
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
        setFormData({
          to_name: "FleetFlow Team",
          from_name: "",
          phone: "",
          email: "",
          truckType: "",
        });
      })
      .catch((error) => {
        alert("Error submitting form: " + error.text);
      });
  };

  return (
    <div className="signup">
      <h1>Start With Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
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
  );
};

export default Signup;
