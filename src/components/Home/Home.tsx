import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import Blogs from '../Blogs/Blogs';
import Landing from '../Landing/Landing';


const Home = () => {
    const context = useContext(UserContext);

    let rendered = context?.user ? <Blogs /> : <Landing />;

    return rendered;
}

export default Home;