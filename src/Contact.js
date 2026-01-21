import { useState } from "react";
import gpsIcon from "./logo/gps.png";
import mailIcon from "./logo/mail.png";
import clockIcon from "./logo/clock.png";
import messageFood from "./logo/message-food.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <section>
        <article>
          <h1>Contacts</h1>

          <section>
            {/* Location */}
            <article style={cardStyle}>
              <h1 style={{ fontSize: "25px" }}>Location</h1>
              <img src={gpsIcon} style={iconStyle} alt="Location" />
              <p style={textStyle}>1234 Lemon Street, Citrus City, TY 12345</p>
              <p style={textStyle}>Phone: (123) 456-7890</p>
            </article>

            {/* Mail */}
            <article style={cardStyle}>
              <h1 style={{ fontSize: "25px" }}>Mail</h1>
              <img src={mailIcon} style={iconStyle} alt="Mail" />
              <p style={textStyle}>Email: contact@littlelemon.com</p>
              <p style={textStyle}>Alternative Email: yang.tortrong@yahoo.com</p>
            </article>

            {/* Hours */}
            <article style={cardStyle}>
              <h1 style={{ fontSize: "25px" }}>Hours</h1>
              <img src={clockIcon} style={iconStyle} alt="Hours" />
              <p style={textStyle}>Monday - Friday: 9:00 AM - 9:00 PM</p>
              <p style={textStyle}>Saturday - Sunday: 10:00 AM - 8:00 PM</p>
            </article>
          </section>
        </article>
      </section>

      <section>
        <img
          src={messageFood}
          alt="Food message"
          style={{
            width: "auto",
            height: "450px",
            display: "block",
            boxShadow: "1px 1px 7px rgb(84, 84, 84)"
          }}
        />

        <article style={formCardStyle}>
          <h1>Send us a message</h1>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Please share with us what you would like us to know"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <input
              type="submit"
              value="Submit"
              style={submitBtnStyle}
            />
          </form>
        </article>
      </section>
    </>
  );
}

/* ===== Styles ===== */

const cardStyle = {
  border: "solid 0.1rem rgb(182, 182, 137)",
  padding: "1rem",
  margin: "1rem",
  backgroundColor: "white",
  boxShadow: "1px 1px 3px black"
};

const iconStyle = {
  height: "50px",
  border: "solid 0.1rem rgb(182, 182, 137)",
  padding: "0.5rem",
  borderRadius: "1rem"
};

const textStyle = {
  fontSize: "15px"
};

const formCardStyle = {
  backgroundColor: "rgb(241, 241, 189)",
  border: "solid 0.1rem rgb(182, 182, 137)",
  padding: "1rem",
  margin: "1rem",
  boxShadow: "1px 1px 3px black"
};

const submitBtnStyle = {
  cursor: "pointer",
  marginTop: "15px",
  padding: "8px 20px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px"
};

export default Contact;
