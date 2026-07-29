import React, { useState } from 'react';
import './Login.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${api_url}/api/user/login`, { email, password });
      console.log(res);

      if (res.data.role === 'customer') {
        setLoading(false);
        return alert("User not found");
      }

      if (res.data.token && res.data.role === 'admin') {
        sessionStorage.setItem('token', res.data.token)
    
        navigate('/dashboard');
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="login-links">
          <a href="/forgot-password" className="link">Forgot Password?</a>
          <a href="/signup" className="link">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
