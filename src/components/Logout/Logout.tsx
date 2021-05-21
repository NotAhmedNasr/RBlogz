import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router';
import UserContext from '../../Context/UserContext';

const Logout = () => {
    const context = useContext(UserContext);

    useEffect(() => {
        localStorage.clear();
        context?.setUser(null);
    }, [context])

    return (
        <Redirect to='/login' />
    );
}

export default Logout;