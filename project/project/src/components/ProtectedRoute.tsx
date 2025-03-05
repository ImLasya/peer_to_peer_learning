import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type ProtectedRouteProps = {
  allowedRoles: ('senior' | 'junior')[];
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  if (!allowedRoles.includes(user?.role!)) {
    return <Navigate to="/" />; // Redirect to home if role is not allowed
  }

  return <Outlet />; // Render the child routes if allowed
};

export default ProtectedRoute;