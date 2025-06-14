import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export default function ReplyModal({ ticketId, onClose }) {
  const [reply, setReply] = useState('');

  const sendReply = () => {
    alert(`Sending reply for ticket ${ticketId}: ${reply}`);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Reply to Ticket</h3>
        <textarea
          rows={6}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Write your reply..."
        />
        <div className="modal-actions">
          <button onClick={sendReply}>Send</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
