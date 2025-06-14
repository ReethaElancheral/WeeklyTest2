import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import PropertyPage from './pages/PropertyPage';
import Login from './pages/Login';
import BookingsPage from './pages/BookingPage';
import './App.css'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-logo">RentalApp</Link>
        <div className="nav-links">
         {user ? (
  <>
    <span>Welcome, {user}</span>
    <Link to="/bookings" className="btn-bookings" style={{ marginLeft: '1rem', color: 'white' }}>
      My Bookings
    </Link>
    <button className="btn-logout" onClick={handleLogout}>Logout</button>
  </>
) : (
  <Link to="/login" className="btn-login">Login</Link>
)}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/:id" element={<PropertyPage />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/bookings" element={<BookingsPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
