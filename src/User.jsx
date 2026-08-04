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
    <section >
      <article style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}>
        <form className="access-form" onSubmit={handleSubmit} >
          <h1 className="h1-style">Sign In</h1>
            <article className="label-input">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={loginData.email} 
                required
                onChange={handleChange} 
              />
              <label htmlFor="password">Password:</label>
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
    
        <form className="access-form" onSubmit={handleSubmit}>
          <h1 className="h1-style">Register</h1>
          <article className="label-input">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={registerData.name}
              required
              onChange={handleChange}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerData.email}
              required
              onChange={handleChange}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerData.password}
              required
              onChange={handleChange}
            ></input>
            <label htmlFor="phone">Phone:</label>
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