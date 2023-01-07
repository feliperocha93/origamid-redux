import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (!login) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default ProtectedRoute;
