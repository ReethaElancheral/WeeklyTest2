import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import image1 from '../assets/images/apartment.JPEG'
import image2 from '../assets/images/beachvilla.jpeg'

const mockProperties = [
  { id: '1', title: 'Cozy Apartment', description: 'Nice place', price: 1800, images: [image1] },
  { id: '2', title: 'Modern Loft', description: 'Stylish loft', price: 1950, images: [image2] },
];


function BookingModal({ property, onClose }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booked ${property.title} from ${startDate} to ${endDate}`);
    onClose();
  };

  return ReactDOM.createPortal(
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2>Book {property.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Start Date: <br />
            <input type="date" required value={startDate} onChange={e => setStartDate(e.target.value)} />
          </label>
          <br /><br />
          <label>
            End Date: <br />
            <input type="date" required value={endDate} onChange={e => setEndDate(e.target.value)} />
          </label>
          <br /><br />
          <button type="submit">Confirm Booking</button>
          <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
        </form>
      </div>
    </div>,
    document.body
  );
}

const modalOverlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '300px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
};


export default function PropertyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const found = mockProperties.find(p => p.id === id);
    setProperty(found);
  }, [id]);

  if (!property) return <p>Property not found</p>;

 
  const user = localStorage.getItem('user');

  const handleBookNow = () => {
    if (!user) {
      alert('Please login first to book.');
      navigate('/login');
    } else {
      setShowBooking(true);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>{property.title}</h1>
      <img src={property.images[0]} alt={property.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{property.description}</p>
      <p>Price: ₹{property.price} / night</p>
      <button onClick={handleBookNow} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Book Now
      </button>

      {showBooking && <BookingModal property={property} onClose={() => setShowBooking(false)} />}
    </div>
  );
}
