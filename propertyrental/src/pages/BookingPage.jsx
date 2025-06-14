import React, { useEffect, useState } from 'react';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('bookings');
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  if (bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div className="container">
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((b, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <strong>{b.title}</strong><br />
            From: {new Date(b.startDate).toLocaleDateString()}<br />
            To: {new Date(b.endDate).toLocaleDateString()}<br />
            ₹{b.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
