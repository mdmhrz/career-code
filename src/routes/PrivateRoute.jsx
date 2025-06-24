import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { loading, user } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>

    }


    if (!user) {
        return <Navigate state={location.pathname} to='/signIn'></Navigate>
    }

    return children
};

export default PrivateRoute;