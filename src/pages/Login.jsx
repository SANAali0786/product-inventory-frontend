import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 const handleSubmit = async() => {
    try{
const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
 email: email,
 password: password
})
localStorage.setItem('token', res.data.token);
navigate('/')
    }
 catch(err){
  alert(err.response.data.message)
 }
 }

  return (
    <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login Now:</h2>
          <input 
          className="login-input"
          type="email"
          placeholder="Enter Your Email"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          className="login-input"
          type="password"
          placeholder="Enter Your Password"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
export default Login;