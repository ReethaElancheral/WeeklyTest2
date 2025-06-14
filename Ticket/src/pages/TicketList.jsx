import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockTickets } from '../data/mockTickets';


function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTickets(mockTickets);
    }, 300);
  }, []);

  return (
    <div className="ticket-list">
      <h1>Support Tickets</h1>
      {tickets.length === 0 ? (
        <p>Loading tickets...</p>
      ) : (
        <div className="ticket-cards">
          {tickets.map((ticket) => (
            <Link
              to={`/tickets/${ticket.id}`}
              key={ticket.id}
              className="ticket-card"
            >
              <div className="ticket-header">
                <h3>{ticket.subject}</h3>
                <span className={`badge status-${ticket.status.toLowerCase()}`}>
                  {ticket.status}
                </span>
              </div>
              <p><strong>Priority:</strong> {ticket.priority}</p>
              <p><strong>Customer:</strong> {ticket.customer}</p>
              <p><strong>Assigned to:</strong> {ticket.assignedTo}</p>
              <p className="created-date">Created: {formatDate(ticket.createdAt)}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
