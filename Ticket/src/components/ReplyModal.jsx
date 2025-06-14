import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


export default function ReplyModal({ isOpen, onClose, onSend }) {

  const [reply, setReply] = React.useState('');

  useEffect(() => {
    if (isOpen) {
      setReply('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Write a Reply</h3>
        <textarea
          rows="6"
          value={reply}
          onChange={e => setReply(e.target.value)}
          placeholder="Type your reply here..."
        />
        <div className="modal-actions">
          <button
            disabled={!reply.trim()}
            onClick={() => {
              onSend(reply.trim());
              onClose();
            }}
          >
            Send
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
