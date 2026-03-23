import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css';
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 const handleSubmit = async() => {
    try{
await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
 name: name,
 email: email,
 password: password
})
navigate('/login')
    }
 catch(err){
  alert(err.response.data.message)
 }
 }

  return (
    <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Register Now:</h2>
          <input 
          className="register-input"
          type="text"
          placeholder="Enter Your Name"
          value = {name}
          onChange={(e) => setName(e.target.value)}
          />
          <input 
          className="register-input"
          type="email"
          placeholder="Enter Your Email"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          className="register-input"
          type="password"
          placeholder="Enter Your Password"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-btn" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
export default Register;