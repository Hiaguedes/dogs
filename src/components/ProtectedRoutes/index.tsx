import React from 'react';
import { useLoginContext } from '../../contexts/LoginContext';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoutes = ({...props}) => {
    const { isLogged } = useLoginContext();

    return isLogged ? (
            <Route {...props} />
    ) : (
        <Navigate to="/login" />
    )
}

export default ProtectedRoutes;