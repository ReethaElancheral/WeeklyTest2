
export const mockTickets = [
  {
    id: '1',
    subject: 'Issue with login',
    status: 'Open',
    priority: 'High',
    createdAt: '2025-06-14T10:00:00Z',
    customer: 'Alice Johnson',
    assignedTo: 'Agent Smith',
    messages: [
      { sender: 'customer', content: 'I cannot log in to my account.' },
      { sender: 'agent', content: 'Please try resetting your password.' },
    ],
  },
  {
    id: '2',
    subject: 'Payment not processed',
    status: 'Pending',
    priority: 'Medium',
    createdAt: '2025-06-12T15:30:00Z',
    customer: 'Bob Williams',
    assignedTo: 'Agent Jane',
    messages: [
      { sender: 'customer', content: 'My payment did not go through.' },
      { sender: 'agent', content: 'We are looking into the payment gateway.' },
    ],
  },
  {
    id: '3',
    subject: 'Bug in ticket creation',
    status: 'Closed',
    priority: 'Low',
    createdAt: '2025-06-10T09:20:00Z',
    customer: 'Charlie Davis',
    assignedTo: 'Agent Smith',
    messages: [
      { sender: 'customer', content: 'Tickets sometimes do not save.' },
      { sender: 'agent', content: 'Bug fixed in the latest update.' },
    ],
  },
  {
    id: '4',
    subject: 'Feature request: Dark Mode',
    status: 'Open',
    priority: 'Low',
    createdAt: '2025-06-13T08:45:00Z',
    customer: 'Dana Lee',
    assignedTo: 'Agent Jane',
    messages: [
      { sender: 'customer', content: 'Please add dark mode to the app.' },
      { sender: 'agent', content: 'We will consider this for future releases.' },
    ],
  },
];
