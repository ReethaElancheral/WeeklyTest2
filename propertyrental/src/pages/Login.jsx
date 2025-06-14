import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim()) {
      localStorage.setItem('user', email);
      if (onLogin) onLogin(email);
      navigate('/');
    } else {
      alert('Please enter your email');
    }
  };

  return (
    <div className="container login-page">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="btn" onClick={handleLogin}>Login</button>
    </div>
  );
}
