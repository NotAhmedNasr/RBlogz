import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router';
import userContext from '../../Context/UserContext';

const Logout = () => {
    const context = useContext(userContext);

    useEffect(() => {
        localStorage.clear();
        context?.setUser(null);
    }, [context])

    return (
        <Redirect to='/login' />
    );
}

export default Logout;