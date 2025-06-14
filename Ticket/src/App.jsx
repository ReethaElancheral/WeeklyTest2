import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TicketList from './pages/TicketList';
import TicketDetail from './pages/TicketDetail';
import { AuthProvider } from './context/AuthContext';
import withRoleGuard from './hoc/withRoleGuard';
import './App.css'

const ProtectedTicketDetail = withRoleGuard(TicketDetail, ['agent', 'admin']);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/tickets" />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/:ticketId" element={<ProtectedTicketDetail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
