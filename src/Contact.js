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
         <article><h1>About <hr style={{
          color: "black",
          width: "30rem",
          }}/>
          </h1></article>
        <article style={{
          backgroundColor:"white", 
          width: "auto",
          padding: "1rem",
          display: "flex",
          flexDirection: "row", // side by side by default
          flexWrap: "wrap",  // allow wrapping on smaller screens
          gap: "1rem"  // space between image and text
        }}>
           <img
                src={messageFood}
                alt="Food message"
                style={{
                  backgroundColor: "beige",
                  borderRadius: "2rem",
                  marginBottom: "1px",
                  width: "100%",
                  maxWidth: "430px",
                  padding:"1rem",
                  height: "auto",
                  display: "block",
                  boxShadow: "1px 1px 7px rgb(84, 84, 84)"
                }}
            />      
        <section style={{
          flex: "1 1 300px", // allow section to shrink and grow
          display: "grid",
          backgroundColor: "beige",
          borderRadius: "2rem",
          textAlign: "left",
          padding: "1rem"
        }}>
          <p style={{fontSize: "20px"}}>
            Little Lemon Restaurant is a cozy Mediterranean eatery dedicated to bringing authentic flavors and fresh ingredients to every dish. Our menu features a wide variety of traditional recipes, from zesty appetizers to hearty main courses, all crafted with care and passion. Whether you’re joining us for a casual lunch, a family dinner, or a special celebration, Little Lemon offers a warm and inviting atmosphere that makes every visit memorable.
          </p>
          <p style={{fontSize: "20px"}}>
            We believe that great food starts with quality ingredients. That’s why we source the freshest produce, locally whenever possible, and pair it with our signature spices and culinary expertise. Our friendly staff is committed to providing excellent service and ensuring that every guest leaves with a smile. Come experience the taste of the Mediterranean and discover why Little Lemon has become a favorite dining destination for our community.
          </p>
        </section>
        </article>
      </section>

         <section>
            <article><h1>Contact us</h1></article>
            </section>
            {/* Location */}
            <section> 
               <article style={cardStyle}>
              <h1 style={{ fontSize: "25px" }}>Location</h1>
              <img src={gpsIcon} style={iconStyle} alt="Location" />
              <p style={{fontSize: "20px"}}>1234 Lemon Street, Citrus City, TY 12345</p>
              <p style={{fontSize: "20px"}}>Phone: (123) 456-7890</p>
            </article>
             {/* Mail */}
            <article style={cardStyle}>
              <h1 style={{ fontSize: "25px" }}>Mail</h1>
              <img src={mailIcon} style={iconStyle} alt="Mail" />
              <p style={{fontSize: "20px"}}>Email: contact@littlelemon.com</p>
              <p style={{fontSize: "20px"}}>Alternative Email: yang.tortrong@yahoo.com</p>
            </article>
            {/* Hours */}
            <article style={cardStyle}>
              <h1 style={{ fontSize: "25px" }}>Hours</h1>
              <img src={clockIcon} style={iconStyle} alt="Hours" />
              <p style={{fontSize: "20px"}}>Monday - Friday: 9:00 AM - 9:00 PM</p>
              <p style={{fontSize: "20px"}}>Saturday - Sunday: 10:00 AM - 8:00 PM</p>
            </article>
        </section>

        
        <section>
          <article style={formCardStyle}>
          <h1>Send a message</h1>         
          <form onSubmit={handleSubmit}>



<article >
  <label style={labelStyle}>First Name:</label>
  <input
    style={inputStyle}
    type="text"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    required
  />
</article>

<article >
  <label style={labelStyle}>Last Name:</label>
  <input
    style={inputStyle}
    type="text"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    required
  />
</article>

<article >
  <label style={labelStyle}>Phone Number:</label>
  <input
  style={inputStyle}
    type="tel"
    name="phone"
    placeholder="123-456-7890"
    value={formData.phone}
    onChange={handleChange}
    required
  />
</article>

<article >
  <label style={labelStyle}>Email Address:</label>
  <input
    style={inputStyle}
    type="email"
    name="email"
    placeholder="example@example.com"
    value={formData.email}
    onChange={handleChange}
    required
  />
</article>

<article style={{
        padding: "1rem",
        display: "flex", 
        }}>
        <textarea
        style={{
          borderRadius:"1rem",
          padding:"1rem",
          flex: "1 1 300px",  // allow section to shrink and grow
          display: "grid",
        }}
          name="message"
          placeholder="Please share with us what you would like us to know"
          rows="8"
          
          value={formData.message}
          onChange={handleChange}
          required
      />
</article>
              <button type="submit"
                value="Submit">Submit</button>
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
  boxShadow: "1px 1px 3px black",
  
};

const labelStyle = {
  width: "140px",
  fontWeight: "bold",
};

const inputStyle = {
  flex: 1,
  padding: "0.5rem",
  borderRadius: "0.5rem",
};

const iconStyle = {
  height: "50px",
  border: "solid 0.1rem rgb(182, 182, 137)",
  padding: "0.5rem",
  borderRadius: "1rem"
};


const formCardStyle = {
  backgroundColor: "rgb(241, 241, 189)",
  border: "solid 0.1rem rgb(182, 182, 137)",
  padding: "1rem",
  margin: "1rem",
  boxShadow: "1px 1px 7px rgb(84, 84, 84)",
  flexWrap: "wrap",
};

export default Contact;
