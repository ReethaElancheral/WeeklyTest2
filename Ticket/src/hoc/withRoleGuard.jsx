
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const withRoleGuard = (Component, allowedRoles = []) => {
  return function Wrapper(props) {
    const { user } = useAuth();

    if (!user || !allowedRoles.includes(user.role)) {
      return <Navigate to="/tickets" />;
    }

    return <Component {...props} />;
  };
};

export default withRoleGuard;
