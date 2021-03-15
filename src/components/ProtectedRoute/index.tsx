import React from 'react';
import { useLoginContext } from '../../contexts/LoginContext';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({...props}) => {
    const { isLogged } = useLoginContext();

    return isLogged ? (
            <Route {...props} />
    ) : (
        <Navigate to="/login" />
    )
}

export default ProtectedRoute;