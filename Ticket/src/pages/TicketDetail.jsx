import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockTickets } from '../data/mockTickets';
import { useAuth } from '../context/AuthContext';
import ReplyModal from '../components/ReplyModal';

export default function TicketDetail() {
  const { ticketId } = useParams();
  const { user } = useAuth();
  const [ticket, setTicket] = useState(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  useEffect(() => {
    const found = mockTickets.find((t) => t.id === ticketId);
    setTicket(found || null);
  }, [ticketId]);

  function handleSendReply(replyText) {
    if (!ticket) return;

    const newMessage = {
      sender: user.name,
      content: replyText,
    };

    
    setTicket((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    
  }

  if (!ticket) {
    return <p>Ticket not found.</p>;
  }

  const canReply = ['agent', 'admin'].includes(user.role);

  return (
    <div className="ticket-detail">
      <h2>{ticket.subject}</h2>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Customer:</strong> {ticket.customer}</p>
      <p><strong>Assigned to:</strong> {ticket.assignedTo}</p>

      <div className="thread">
        {ticket.messages.map((msg, i) => (
          <div key={i} className="message">
            <strong>{msg.sender}</strong>: {msg.content}
          </div>
        ))}
      </div>

      {canReply && (
        <button className="reply-btn" onClick={() => setIsReplyOpen(true)}>
          Reply
        </button>
      )}

      <ReplyModal
        isOpen={isReplyOpen}
        onClose={() => setIsReplyOpen(false)}
        onSend={handleSendReply}
      />
    </div>
  );
}
