import { useState } from "react";

export default function User() {
const [loginData, setLoginData] = useState({
  email: "",
  password: ""
})
const [registerData, setRegisterData] = useState({
  email: "",
  password: "",
  name: "",
  phone: ""
})
 const handleChange = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  setLoginData({
    ...loginData,
    [name]: value,
  })
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Login data submitted:", loginData);
 }
  return (
    <section>
      <article className="message-form">
        <form onSubmit={handleSubmit} >
          <h1 style={{
            width: "100%",
            height: "100px",
            textAlign: "center",
            marginBottom: "1rem",
            margin: "1rem 0",
            padding: "1rem",
          }}>Account Sign In</h1>
          <article className="label-input">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={loginData.email} 
              required
              onChange={handleChange} 
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={loginData.password} 
              required
              onChange={handleChange} 
            />
          </article>
        <button type="submit">Sign In</button>
        </form>
    
        <form>
          <h1 style={{
            width: "100%",
            height: "100px",
            textAlign: "center",
            marginBottom: "1rem",
            margin: "1rem 0",
            padding: "1rem",
          }}>Register</h1>
          <article className="label-input">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={registerData.name}
              required
              onChange={handleChange}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerData.email}
              required
              onChange={handleChange}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerData.password}
              required
              onChange={handleChange}
            ></input>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={registerData.phone}
              required
              onChange={handleChange}
            ></input>
          </article>
          <button type="submit">Register</button>          
        </form>
      </article>
    </section>
  );
}