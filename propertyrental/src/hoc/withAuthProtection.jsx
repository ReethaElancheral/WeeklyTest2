import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function withAuthProtection(Component) {
  return function ProtectedComponent(props) {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('user');

    React.useEffect(() => {
      if (!isLoggedIn) navigate('/login');
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? <Component {...props} /> : null;
  };
}
