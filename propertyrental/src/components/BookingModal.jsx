
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import withAuthProtection from '../hoc/withAuthProtection';
import DatePickerPortal from './DatePickerPortal';

function ModalContent({ onClose, propertyId, propertyTitle, price }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dates, setDates] = useState({ start: null, end: null });

  const handleBook = () => {
    if (!dates.start || !dates.end) {
      alert('Please select booking dates');
      return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      propertyId,
      title: propertyTitle,
      startDate: dates.start.toISOString(),
      endDate: dates.end.toISOString(),
      price,
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert(`Booked ${propertyTitle}`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Book {propertyTitle}</h3>
        <button className="btn" onClick={() => setShowDatePicker(true)}>Select Dates</button>
        {dates.start && dates.end && (
          <p>{dates.start.toLocaleDateString()} to {dates.end.toLocaleDateString()}</p>
        )}
        <div className="modal-actions">
          <button className="btn" onClick={handleBook}>Confirm Booking</button>
          <button className="btn btn-cancel" onClick={onClose}>Cancel</button>
        </div>

        {showDatePicker && (
          <DatePickerPortal
            onClose={() => setShowDatePicker(false)}
            onDatesChange={setDates}
            initialDates={dates}
          />
        )}
      </div>
    </div>
  );
}

export default withAuthProtection(function BookingModal({ property, onClose }) {
  return ReactDOM.createPortal(
    <ModalContent
      onClose={onClose}
      propertyId={property.id}
      propertyTitle={property.title}
      price={property.price}
    />,
    document.getElementById('modal-root')
  );
});
