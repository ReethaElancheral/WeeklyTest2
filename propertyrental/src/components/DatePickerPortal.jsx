import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function DatePickerPortal({ onClose, onDatesChange, initialDates }) {


  const [start, setStart] = useState(initialDates.start ? formatDateInput(initialDates.start) : '');
  const [end, setEnd] = useState(initialDates.end ? formatDateInput(initialDates.end) : '');

  function formatDateInput(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  const handleApply = () => {
    if (!start || !end) {
      alert('Please select both start and end dates');
      return;
    }
    if (new Date(end) < new Date(start)) {
      alert('End date must be after start date');
      return;
    }
    onDatesChange({ start: new Date(start), end: new Date(end) });
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Select Booking Dates</h3>
        <label>
          Start Date: <input type="date" value={start} onChange={e => setStart(e.target.value)} />
        </label>
        <label>
          End Date: <input type="date" value={end} onChange={e => setEnd(e.target.value)} />
        </label>
        <div className="modal-actions">
          <button className="btn" onClick={handleApply}>Apply</button>
          <button className="btn btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
