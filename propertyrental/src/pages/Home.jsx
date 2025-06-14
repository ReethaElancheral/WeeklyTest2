import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../api/properties';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties().then(setProperties);
  }, []);

  return (
    <div className="container">
      <h2>Available Properties</h2>
      <div className="grid">
        {properties.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}
