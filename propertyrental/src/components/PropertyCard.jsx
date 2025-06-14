import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  return (
    <div className="card">
     <img 
  src={property.images && property.images.length > 0 ? property.images[0] : '/fallback-image.jpg'} 
  alt={property.title} 
/>
      <div className="card-content">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p>₹{property.price} / night</p>
        <Link to={`/properties/${property.id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
}
